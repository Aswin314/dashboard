import React from 'react'

const page = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Notifications</h1>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Email Notifications
                        </label>
                        <select
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>Enabled</option>
                            <option>Disabled</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            SMS Notifications
                        </label>
                        <select
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>Enabled</option>
                            <option>Disabled</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Push Notifications
                        </label>
                        <select
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>Enabled</option>
                            <option>Disabled</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page
