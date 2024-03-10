import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReservationForm() {
  const navigate = useNavigate();
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [people, setPeople] = useState<number>(1);
  const [date, setDate] = useState<string>("");
  const [occasion, setOccasion] = useState<string>("");
  const [preferences, setPreferences] = useState<string>("");
  const [comments, setComments] = useState<string>("");
  const [time, setTime] = useState<string>("");
  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    const dateString = e.target.value;
    setDate(dateString);
  }

  function handleSumbit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate("/confirmation");
  }

  return (
    <form className="reservation-form" onSubmit={handleSumbit}>
      <div>
        <label htmlFor="fName">First Name</label> <br />
        <input
          type="text"
          id="fName"
          placeholder="First Name"
          required
          minLength={2}
          maxLength={50}
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="lName">Last Name</label> <br />
        <input
          type="text"
          id="lName"
          placeholder="Last Name"
          minLength={2}
          maxLength={50}
          value={lName}
          onChange={(e) => setLName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label> <br />
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          required
          minLength={4}
          maxLength={200}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="phonenum">Phone Number</label> <br />
        <input
          type="tel"
          id="phonenum"
          placeholder="(xxx)-xxx-xxxx"
          value={tel}
          required
          minLength={10}
          maxLength={25}
          onChange={(e) => setTel(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="people">Number of People</label> <br />
        <input
          type="number"
          id="people"
          placeholder="Number of People"
          value={people}
          required
          min={1}
          max={100}
          onChange={(e) => setPeople(Number(e.target.value) || 1)}
        />
      </div>

      <div>
        <label htmlFor="date">Select Date</label> <br />
        <input
          type="date"
          id="date"
          required
          value={date}
          onChange={handleDateChange}
        />
      </div>

      <div>
        <label htmlFor="time">Select Time</label> <br />
        <input
          type="time"
          id="time"
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="occasion">Occasion</label> <br />
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="preferences">Seating preferences</label> <br />
        <select
          id="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          required
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>
      </div>

      <div>
        <label htmlFor="comments">Additional Comments</label> <br />
        <textarea
          id="comments"
          rows={8}
          cols={50}
          placeholder="Additional Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </div>

      <div>
        <br />
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>
        <button type="submit">Book Table</button>
      </div>
    </form>
  );
}
