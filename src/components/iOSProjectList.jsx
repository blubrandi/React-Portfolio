import React from "react"

import IOSProject from "./iOSProject"

import GeoSeekImg from "../assets/geoseek-marketing-image3.png"
import PhotoNoteImg from "../assets/photonote.png"
import ExperiencesImg from "../assets/IMG_0501.PNG"
import TIHImg from "../assets/IMG_0503.PNG"
import SportsBook1 from '../assets/sportsbook/IMG_2312.PNG'
import SportsBook2 from '../assets/sportsbook/IMG_2313.PNG'
import SportsBook3 from '../assets/sportsbook/IMG_2314.PNG'
import SportsBook4 from '../assets/sportsbook/IMG_2315.PNG'
import SportsBook5 from '../assets/sportsbook/IMG_2316.PNG'
import SportsBook6 from '../assets/sportsbook/IMG_2317.PNG'

export default function IOSProjectList() {
    
    return  (
        <>
            <IOSProject imgURL={SportsBook4} projectTitle="Sportsbook App" type="Solo Project, Mobile App Demo" description="This Sportsbook App Demo is built with React Native & Expo." contributions="UX/UI Design, State Management with Redux/ReduxJS, API calls using Axios." githubUrl="https://github.com/blubrandi/Sportsbook-App-Demo-React-Native-/commits/main" />

            <IOSProject imgURL={GeoSeekImg} projectTitle="GeoSeek" type="Collaborative, Lambda Labs, Stakeholder" description="GeoSeek aims to be the name for creating engaging experiences through technology while promoting community engagement and physical activity.  GeoSeek allows you to place and find user-created and curated hidden gems within your local community.  Search the map for gems close to you. Travel to the location and see the amazing features of that location!  Know of someplace great? Maybe a breathtaking view at sunset or a part of your town that’s a little less travelled but holds great historical significance! Whatever and wherever the case, create your hidden gem and share it with others!" contributions="UI Design, MapBox Implementation, CoreLocation, User Permisions, UI viastoryboard and Programmatic Constraints, Xibs, Annotations, CoreData and data modeling" githubUrl="https://github.com/Lambda-School-Labs/geoseek-iOS/commits?author=blubrandi" />

            <IOSProject imgURL={PhotoNoteImg} projectTitle="PhotoNote" type="Collaborative, Lambda Winter Hackathon Winner" description="PhotoNote allows you to take and store images with your iPhone and create albums with notes on your photos." contributions="UI from design files, ImageCapture from user device, User Permissions" githubUrl="https://github.com/Photo-Note/IOS/commits?author=blubrandi" />

            <IOSProject imgURL={ExperiencesImg} projectTitle="Experiences" type="Solo Project" description="Originally a Sprint Challenge from my Lambda iOS Development Course, the Experiences app stretched beyond to become an app to allow users capture video, sound, or image and tie the media to a place on a map of Disneyland - The Happiest Place on Earth." contributions="UI Design, MapKit, CoreLocation, CoreData, AVFoundation, Custom Annotations" githubUrl="https://github.com/blubrandi/ios-sprint-challenge-experiences/tree/master/Experiences" />

            <IOSProject imgURL={TIHImg} projectTitle="Today In History" type="Solo Project, In Progress" description="Today In History uses the Muffin Labs History API that pulls historic events from Wikipedia.  View today's events, select a specific date to view events from that date, as well as bookmark events you'd like to keep track of." contributions="UI Design, Networking and URLSession, FileManager for Persistence, WebKit, Tabbar Controllers" githubUrl="https://github.com/blubrandi/Today-In-History"/>

        </>
    )

}