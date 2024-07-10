import React from "react";

function About() {
    let center = "center"
    return (
        <div>
            <h2 className={center}>About</h2>
            <p className={center}>TeneT is a place for posting bundles of text, either in the form of blog posts, humble attemps at storytelling, informative writings as well as potentially devlog entries. I will mainly share my fabricated stories and informative writings/devlogs, in a measle attempt to try and give you guys some good influence in this world of adversity.This website is very barebones as of now, as I am not familiar with css, html nor javascript. That said I do plan on improving the look of this as I gain more experience.</p>
        </div>
    );
}

export default function App() {
    return (
        <div className="book">
            <h1 className="center">Welcome to TeneT</h1>

            {About()}
        </div>
    );
}