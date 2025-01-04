'use client';

import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Contador</h1>
            <p>O valor atual é: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count - 1)}>Decrementar</button>
            <button onClick={() => setCount(0)}>Resetar</button>
        </div>
    );
}
