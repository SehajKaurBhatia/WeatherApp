import "./form.css";
import React, { useState, useEffect } from "react";
{/* <table class="styled-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>john@example.com</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>jane@example.com</td>
            </tr>
            <!-- Add more rows as needed -->
        </tbody>
    </table>  */}
function File() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [selectedOption, setSelectedOption] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName, lastName);
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
    };

    useEffect(() => {
        // This effect doesn't seem to be doing anything, you can remove it
    }, [firstName]);

    return (
        <div className="App">
            <h1>Player Form Details</h1>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="firstname">First Name*</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="Enter First Name"
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="lastname">Last Name*</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Enter Last Name"
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Country Origin:</td>
                        <td>
                            <select>
                                <option
                                    value=""
                                    disabled
                                    selected={selectedOption === ""}
                                >
                                    Choose a country
                                </option>
                                <option>India</option>
                                <option>Indonesia</option>
                                <option>USA</option>
                                <option>Canada</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button type="reset" value="reset" onClick={handleReset}>
                Reset
            </button>
            <button type="submit" value="Submit" onClick={handleSubmit}>
                Submit
            </button>
            <div id="text">
                {firstName} {lastName}
            </div>
        </div>
    );
}

export default File;
