"use client";
import Header from "@/components/Header";

export default function Home() {
  const name = "David";
  return (
    <div>
      <Header name={name}>
        <p>this is a Header children</p>
      </Header>
      <div>Home Page</div>
    </div>
  );
}
