"use client";

import { useEffect, useState } from "react";

export default function AnoAtual() {
    const [ano, setAno] = useState<number | null>(null);

    useEffect(() => {
        const data = new Date();
        setAno(data.getFullYear());
    }, []);

    return <>{ano ?? "..."}</>;
}