import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Artpage() {
    const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/hello/")
      .then(res => setMessage(res.data.message))
      .catch(err => console.error(err));
  }, []);

    return (
        <>
        <div className="w-full text-center text-lg font-semibold">
          - - - Galleria - - -
        </div>
        <p>{message}</p>
        <div>
            <div className="grid grid-cols-2 gap-4">
                <div>hi</div>
                <div>hi</div>
                <div>hi</div>
                <div>hi</div>
            </div>
        </div>
        </>
    )
}

export default Artpage;