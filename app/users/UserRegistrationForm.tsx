"use client";
import { FormEvent } from "react";

export default function Page() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/register", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    let data;
    try {
      data = await response.json();
    } catch (error) {
      console.log("The was an error accessing the server", error);
    }

    if (data?.ok) {
    }
    //Redirect to the previous page
    // ...else notify the entrant that the entry wasn't saved automatically
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" className="textinput" />
      <button type="submit">Submit</button>
    </form>
  );
}
