import React from 'react'

const page = () => {
    const tasks = [
        {
            id: 1,
            title: "Finish project report",
            description: "Complete the final report for the project and submit it.",
            status: "In Progress",
            dueDate: "2025-02-18",
        },
        {
            id: 2,
            title: "Update website content",
            description: "Revise the homepage text to reflect recent changes.",
            status: "Pending",
            dueDate: "2025-02-20",
        },
        {
            id: 3,
            title: "Team meeting",
            description: "Discuss the project milestones and progress with the team.",
            status: "Completed",
            dueDate: "2025-02-15",
        },
    ];
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
            <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Tasks</h1>
                <section className="space-y-6">
                    {tasks.map((task) => (
                        <div key={task.id} className="flex items-center justify-between bg-white rounded-lg 
              shadow-md p-6 border-l-4"  style={{
                                borderColor:
                                    task.status === "Completed"
                                        ? "green"
                                        : task.status === "In Progress"
                                            ? "yellow"
                                            : "red",
                            }}>
                            <div className="flex flex-col">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {task.title}
                                </h2>
                                <p className="text-sm text-gray-600 mt-2">{task.description}</p>
                                <p className="text-sm text-gray-500 mt-2">
                                    Due Date: {task.dueDate}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>


        </div>
    )
}

export default page
