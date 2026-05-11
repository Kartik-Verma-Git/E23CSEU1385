const optimizeTasks = (tasks, maxHours) => {

    const totalTasks = tasks.length;

    const dp = Array.from(
        { length: totalTasks + 1 },
        () => Array(maxHours + 1).fill(0)
    );

    for (let i = 1; i <= totalTasks; i++) {

        const duration = tasks[i - 1].Duration;
        const impact = tasks[i - 1].Impact;

        for (let hours = 0; hours <= maxHours; hours++) {

            if (duration <= hours) {

                dp[i][hours] = Math.max(
                    impact + dp[i - 1][hours - duration],
                    dp[i - 1][hours]
                );

            } else {

                dp[i][hours] = dp[i - 1][hours];
            }
        }
    }

    let remainingHours = maxHours;

    const selectedTasks = [];

    for (let i = totalTasks; i > 0; i--) {

        if (dp[i][remainingHours] !== dp[i - 1][remainingHours]) {

            selectedTasks.push(tasks[i - 1]);

            remainingHours -= tasks[i - 1].Duration;
        }
    }

    return {
        totalImpact: dp[totalTasks][maxHours],
        utilizedHours: maxHours - remainingHours,
        selectedTasks
    };
};

module.exports = optimizeTasks;