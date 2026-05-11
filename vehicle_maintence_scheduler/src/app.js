const express = require("express");

const getAccessToken = require("./utils/auth");

const {
    fetchDepots,
    fetchVehicles
} = require("./services/apiServices");

const optimizeTasks = require("./services/schedulerServices");

const app = express();

app.get("/schedule", async (req, res) => {

    try {

        const token = await getAccessToken();

        const depots = await fetchDepots(token);

        const vehicles = await fetchVehicles(token);

        const schedulingResults = depots.map((depot) => {

            const optimized = optimizeTasks(
                vehicles,
                depot.MechanicHours
            );

            return {
                depotID: depot.ID,
                availableHours: depot.MechanicHours,
                totalImpact: optimized.totalImpact,
                utilizedHours: optimized.utilizedHours,
                scheduledTasks: optimized.selectedTasks
            };
        });

        res.status(200).json({
            success: true,
            totalDepots: depots.length,
            data: schedulingResults
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

module.exports = app;