import Image from "next/image";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const Verifier = (props) => {
  const [certificate, setCertificate] = useState("");
  const [certificateId, setCertificateId] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [studentCollege, setStudentCollege] = useState("");
  const [studentName, setStudentName] = useState("");
  const [notVerified, setnotVerified] = useState(false);
  const [verified, setVerified] = useState(false);
  const [popper, setpopper] = useState(false);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setCertificate(props.id);
  }, []);

  async function fetchVerification(e) {
    setLoading(true);
    e.preventDefault();
    setVerified(false);
    setnotVerified(false);
    const response = await fetch(
      `/api/getVerification?CertificateId=${certificate}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    console.log("Success:", result.msg);
    setLoading(false);
    if (result) {
      if (result.msg.certificateId) {
        setpopper(true);
        setVerified(true);
        setCertificateId(result.msg.certificateId);
        setStudentCollege(result.msg.studentCollege);
        setIssueDate(result.msg.issueDate);
        setStudentName(result.msg.studentName);
        setTimeout(() => {
          setpopper(false);
        }, 6000);
      } else {
        setnotVerified(true);
      }
    }
  }

  return (
    <div className="certificate-verification">
      <h1 className="mb-1 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        A2z Solutions
      </h1>
      <Confetti
        run={popper}
        height={1000}
        width={2000}
        initialVelocityY={-20}
        tweenDuration={100}
        numberOfPieces={900}
        recycle={false}
      />
      <form onSubmit={fetchVerification}>
        <p className="text-xl">Certificate Verification</p>
        <div className="input-container">
          <label forName="certificate">Certificate Code:</label>
          <input
            type="text"
            className="outline-none"
            placeholder="Enter your certificate code"
            id="certificate"
            required
            value={certificate}
            onChange={(e) => setCertificate(e.target.value)}
          />
        </div>
        {!Loading && (
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Verify Certificate
          </button>
        )}
        {Loading && (
          <button
            disabled
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              role="status"
              class="inline w-4 h-4 mr-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Please Wait...
          </button>
        )}
      </form>
      {verified && (
        <div className="flex justify-center mt-3">
          <div className="border rounded-xl w-4/5 shadow-md bg-white text-left p-3">
            <div className="flex justify-center">
              <Image src="/tick_.png" alt={"s"} height={100} width={100} />{" "}
            </div>
            {<p className="text-center font-semibold">VERIFIED</p>}
            {<p>Name: {studentName}</p>}
            {<p>College: {studentCollege}</p>}
            {<p>ID: {certificateId}</p>}
            {<p>Issue Date: {issueDate}</p>}
          </div>
        </div>
      )}
      {notVerified && (
        <div className="flex justify-center mt-3">
          <div className="border rounded-xl w-4/5 shadow-md bg-white text-left p-3">
            <div className="flex justify-center">
              <Image src="/cross_.png" alt={"s"} height={100} width={100} />{" "}
            </div>
            {<p className="text-center font-semibold">NOT-VERIFIED</p>}
            {<p className="text-center">This is not a Valid Certificate ID.</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Verifier;