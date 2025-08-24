import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { motion } from "framer-motion";

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // APIからタスク一覧を取得
        const fetchTasks = async () => {
            try {
                const response = await axios.get("/api/tasks");
                // レスポンスデータが配列であることを確認
                const tasksData = Array.isArray(response.data)
                    ? response.data
                    : [];
                console.log("API Response:", response.data);
                console.log("Tasks Data:", tasksData);
                setTasks(tasksData);
                setLoading(false);
            } catch (err) {
                console.error("API Error:", err);
                setError("タスクの取得に失敗しました");
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    if (loading) return <div>読み込み中...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="App">
            <header className="App-header">
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "100vh" }}
                >
                    <h1>Movie Map</h1>
                </motion.div>
            </header>
            <main>
                {Array.isArray(tasks) && tasks.length > 0 ? (
                    <ul>
                        {tasks.map((task) => (
                            <li
                                key={task.id}
                                style={{
                                    textDecoration: task.completed
                                        ? "line-through"
                                        : "none",
                                }}
                            >
                                {task.title}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>タスクがありません</p>
                )}
            </main>
        </div>
    );
}

export default App;
