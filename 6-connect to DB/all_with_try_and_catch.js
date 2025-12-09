import React, { useState } from "react";

// ================= GET Examples =================
export function GetExample1() {
  const [data, setData] = useState(null);
  async function fetchData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Error GET 1:", err);
    }
  }

  return (
    <div>
      <button onClick={fetchData}>GET Post 1</button>
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export function GetExample2() {
  const [data, setData] = useState(null);
  async function fetchData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/invalid"); // error
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Error GET 2:", err);
    }
  }

  return (
    <div>
      <button onClick={fetchData}>GET Invalid Post</button>
    </div>
  );
}

export function GetExample3() {
  const [data, setData] = useState(null);
  async function fetchData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Error GET 3:", err);
    }
  }

  return (
    <div>
      <button onClick={fetchData}>GET Users</button>
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export function GetExample4() {
  const [data, setData] = useState(null);
  async function fetchData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/invalid"); // error
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Error GET 4:", err);
    }
  }

  return (
    <div>
      <button onClick={fetchData}>GET Invalid URL</button>
    </div>
  );
}

export function GetExample5() {
  const [data, setData] = useState(null);
  async function fetchData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Error GET 5:", err);
    }
  }

  return (
    <div>
      <button onClick={fetchData}>GET Todo 1</button>
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// ================= POST Examples =================
export function PostExample1() {
  const [data, setData] = useState(null);
  async function sendData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "Test POST 1" }),
      });
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Error POST 1:", err);
    }
  }

  return (
    <div>
      <button onClick={sendData}>POST Test 1</button>
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export function PostExample2() {
  const [data, setData] = useState(null);
  async function sendData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/invalid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "Test POST Error" }),
      });
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Error POST 2:", err);
    }
  }

  return (
    <div>
      <button onClick={sendData}>POST Error</button>
    </div>
  );
}

export function PostExample3() {
  const [data, setData] = useState(null);
  async function sendData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "Test POST 3" }),
      });
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Error POST 3:", err);
    }
  }

  return (
    <div>
      <button onClick={sendData}>POST Test 3</button>
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export function PostExample4() {
  const [data, setData] = useState(null);
  async function sendData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ invalid: undefined }), // سيء intentional
      });
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Error POST 4:", err);
    }
  }

  return (
    <div>
      <button onClick={sendData}>POST Invalid Data</button>
    </div>
  );
}

export function PostExample5() {
  const [data, setData] = useState(null);
  async function sendData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "Test POST 5" }),
      });
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Error POST 5:", err);
    }
  }

  return (
    <div>
      <button onClick={sendData}>POST Test 5</button>
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// ================= DELETE Examples =================
export function DeleteExample1() {
  const [data, setData] = useState(null);
  async function deleteData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
      });
      setData({ status: res.status });
    } catch (err) {
      console.error("Error DELETE 1:", err);
    }
  }

  return (
    <div>
      <button onClick={deleteData}>DELETE Post 1</button>
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export function DeleteExample2() {
  const [data, setData] = useState(null);
  async function deleteData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/invalid", {
        method: "DELETE",
      });
      setData({ status: res.status });
    } catch (err) {
      console.error("Error DELETE 2:", err);
    }
  }

  return (
    <div>
      <button onClick={deleteData}>DELETE Invalid</button>
    </div>
  );
}

export function DeleteExample3() {
  const [data, setData] = useState(null);
  async function deleteData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/3", {
        method: "DELETE",
      });
      setData({ status: res.status });
    } catch (err) {
      console.error("Error DELETE 3:", err);
    }
  }

  return (
    <div>
      <button onClick={deleteData}>DELETE Post 3</button>
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export function DeleteExample4() {
  const [data, setData] = useState(null);
  async function deleteData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/invalid", {
        method: "DELETE",
      });
      setData({ status: res.status });
    } catch (err) {
      console.error("Error DELETE 4:", err);
    }
  }

  return (
    <div>
      <button onClick={deleteData}>DELETE Invalid Post</button>
    </div>
  );
}

export function DeleteExample5() {
  const [data, setData] = useState(null);
  async function deleteData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/5", {
        method: "DELETE",
      });
      setData({ status: res.status });
    } catch (err) {
      console.error("Error DELETE 5:", err);
    }
  }

  return (
    <div>
      <button onClick={deleteData}>DELETE Post 5</button>
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
