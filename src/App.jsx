import React from "react";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Manage from "./components/manage/manage";
import Said from "./components/said/said";

export default function App() {
  const data = [
    {
      btn:"01",
      title:"Track company-wide progress",
      desc:"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
    },
    {
      btn:"02",
      title:"Track company-wide progress",
      desc:"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
    },
    {
      btn:"03",
      title:"Track company-wide progress",
      desc:"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
    }
  ]
  const cards = [
    {
      img:"https://s3-alpha-sig.figma.com/img/9db5/d732/b830bedc9861fb0dbbfa8d37c2ffef11?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TywGlViXlJpmBzLRC8l3UqgLJ9HC88hL9cQBO2H4eLuaAyKHtr1YtSVkmd24LHhj2Kuk0znuW7jnZnAfSRqQEC3rSwygoEYBExLXGSggEcIMcd-m1VCXZyUbxytV924zJZzRfEBmsifyjyz2v26hfQcS4dzdR6lyhSNyehdxY7NHEVHnaL~xt83FM2rt7oF0sLGEno1urBx3Mobhz~eJnNcdOWrdE93Virq282iJOo-Ai2AhCwVYnTZJv4BBBmXgGr7O64~5WBazOUHEu7-FNIeW5tRa9rAYLlPEZ7vkfxuEuNodxnozhaRsHkoQSOgEiFlFnn3pPRBjfNQK2x3Q0g__",
      desc:"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
    },
    {
      img:"https://s3-alpha-sig.figma.com/img/9db5/d732/b830bedc9861fb0dbbfa8d37c2ffef11?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TywGlViXlJpmBzLRC8l3UqgLJ9HC88hL9cQBO2H4eLuaAyKHtr1YtSVkmd24LHhj2Kuk0znuW7jnZnAfSRqQEC3rSwygoEYBExLXGSggEcIMcd-m1VCXZyUbxytV924zJZzRfEBmsifyjyz2v26hfQcS4dzdR6lyhSNyehdxY7NHEVHnaL~xt83FM2rt7oF0sLGEno1urBx3Mobhz~eJnNcdOWrdE93Virq282iJOo-Ai2AhCwVYnTZJv4BBBmXgGr7O64~5WBazOUHEu7-FNIeW5tRa9rAYLlPEZ7vkfxuEuNodxnozhaRsHkoQSOgEiFlFnn3pPRBjfNQK2x3Q0g__",
      desc:"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
    },
    {
      img:"https://s3-alpha-sig.figma.com/img/9db5/d732/b830bedc9861fb0dbbfa8d37c2ffef11?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TywGlViXlJpmBzLRC8l3UqgLJ9HC88hL9cQBO2H4eLuaAyKHtr1YtSVkmd24LHhj2Kuk0znuW7jnZnAfSRqQEC3rSwygoEYBExLXGSggEcIMcd-m1VCXZyUbxytV924zJZzRfEBmsifyjyz2v26hfQcS4dzdR6lyhSNyehdxY7NHEVHnaL~xt83FM2rt7oF0sLGEno1urBx3Mobhz~eJnNcdOWrdE93Virq282iJOo-Ai2AhCwVYnTZJv4BBBmXgGr7O64~5WBazOUHEu7-FNIeW5tRa9rAYLlPEZ7vkfxuEuNodxnozhaRsHkoQSOgEiFlFnn3pPRBjfNQK2x3Q0g__",
      desc:"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
    },
  ]
  return (
    <div className="max-w-[1440px] md:p-5 p-2 sm:p-4 mx-auto flex flex-col gap-5 justify-center items-center">
      <Header />
      <Hero/>
      <Manage props={data}/>
      <Said cards={cards}/>
    </div>
  );
}
