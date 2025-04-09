import KoboldCuisinePic from "./images/gamedev/kobold-cuisine.jpg";
import Chess2Pic from "./images/webdev/chess2.png";
import RPGPic from "./images/gamedev/rpg.png";
import MorshdlePic from "./images/webdev/morshdle.png";
import DinoDigPic from "./images/webdev/dinodig.png";
import SeveranceAnimationPic from "./images/morsh_severance_background.gif";
import YCHPic from "./images/webdev/ych.png";
import DHOFPic from "./images/gamedev/destiny-hand-of-fate.jpg";
import PooltoyZPic from "./images/mods/pooltoyz.jpg";
import CraftableMannequinsPic from "./images/mods/craftable-mannequins.jpg";
import CommanderPic from "./images/mods/commander-cube.jpg";
import LugiaPic from "./images/vrchat/lugia.gif";
import OtterPic from "./images/vrchat/otter.jpg";
import NicePotionPic from "./images/gamedev/nicepotion.gif";
import Mario64Pic from "./images/mods/mario64.jpg";
import LethalCompanyPic from "./images/mods/lethal-company.gif";
import WebsitePic from "./images/webdev/website.png"

export interface ProjectInfo {
    title: string;
    description: string[];
    tags: string[];
    image: string;
    link: string;
    blurb?: string;
}

const NO_LINK = "javascript:;";

export const KoboldCuisine: ProjectInfo = {
    title: "Kobold Cuisine!",
    description: [
        "Kobold Cuisine is a game my partner and I made for the GMTK Game Jam 2024. You play as a kobold chef who must use the power of the \"Time Scale\" to create clones of yourself in order to feed a hungry dragon. The gameplay was largely inspired by games in the 'factory' genre like Factorio and Satisfactory, but with a focus on level-based puzzles to fit the timeframe of the game jam.",
        "This was the first time I  participated in a game jam, and it taught me a LOT about prioritizing features under tight time constraints, wihch features add the most 'polish' to a final product, and the importance of user feedback early and often. Being under such a tight deadline challenged a lot of my usual practices and forced me to focus on just getting a project good enough to ship rather than perfect. I always felt that I needed to create EVERYTHING from scratch, but this project let me collaborate with my partner and source music from artists like Kevin MacLeod.",
        "The biggest takeaway from the game came from the user feedback. Although I did do early user-testing, the initial prototype of the game took too long to prototype and was understandably pretty confusing. While it wasn't a mistake to pursue a puzzle game during a game jam, the tight time constraints made it hard to sufficiently teach users how to play and provide a satisfying ramp up in difficulty. User feedback is undeniably important in every aspect of the design process, and I learned a lot from this experience.",
        "Out of 7.5K entries, our game placed #284 overall and #77 in style!! I'm extremely proud of this project, and it has truly inspired me to continue with more game dev :D"
    ],
    tags: ["game-dev", "unity", "c#", "blender"],
    image: KoboldCuisinePic,
    link: "https://otterpop-uwu.itch.io/kobold-cuisine",
}

export const SeveranceAnimation: ProjectInfo = {
    title: "Severance-Inspired Animation",
    description: [
        "I watched Severance and was inspired to create a short animation based on the title sequence of the show! I used Blender to create the characters and render out the shots into a full sequence. It was a unique challenge to copy the style and camera shots of the intro exactly!",
        "This was the first time I attempted to seriously render out... anything in Blender. Most of my previous work only involved modeling, texturing, and some rudimentary physics simulations. I was surprised by how many of my learnings from this project apply to real-world filmography as well. Copying the camera shots required me to learn more about the physical properties of cameras like focal length and depth of field and how they're utilized to create tilt-shifts and dolly zooms. I also learned a lot about how to emulate and set up professional lighting.",
        "The hardest part of this project was the animation. The characters I designed were rigged, but not in a way conducive to hand animation. Most of the animations are sourced from Adobe Mixamo and blended together to create more complex animations. Working on a larger project like this also required me to look more critically at my pipeline from modeling to rendering to compositing.",
        "I received a lot of compliments and positive feedback on the animation! I was surprised at how easy it was to make everything look good, and I would love to create some original animations in the future."
    ],
    tags: ["animation", "blender", "substance-painter", "3D-modeling"],
    image: SeveranceAnimationPic,
    link: "https://drive.google.com/file/d/1DhM2npiIKGtKj93SVaZ68R0uQyQUomb2/view?usp=drive_link",
}

export const Morshdle: ProjectInfo = {
    title: "Morshdle",
    description: [
        "Wordle, but the answer is... you'll see.",
        "For such a simple game, there's a lot of interesting nuance in colouring the blocks and the on-screen keyboard. It felt a little like a Leetcode question.",
    ],
    tags: ["react", "typescript", "web-dev"],
    image: MorshdlePic,
    link: "https://morshdle.otterpop.io/",
}

export const Chess2: ProjectInfo = {
    title: "Chess 2",
    description: [
        "Chess 2 is a radical reimagining of chess involving a randomized board and resource denial. The board is made up of tiles, each with a different chess piece on them. Moving your piece onto the tile allows you to remove that tile and transform into that piece on a later turn. The goal of the game is to checkmate your opponent! It was inspired by the rising popularity of the Chess960 variant, which randomizes the starting positions of backline pieces.",
        "Chess has a large corpus of information regarding software and AI implementation that I was able to adapt for this project. Concepts such as Bitboards and Zobrist Hashing helped to optimize for performance and space, and allowed me to implement a fairly competent AI opponent that calculates it's move on the client-side. Originally it was supposed to be multiplayer, but I quickly realized that it would be out of scope for a silly little multiplayer game.",
        "One of my favorite projects in my Computer Science classes was implementing a Chess AI agent that could implement different strategies (Alpha-Beta pruning, Minimax, etc.) and play against itself. It was very satisfying to see AI agents learn and adapt to a game that I had created. They were better than me for a while...",
    ],
    tags: ["react", "typescript", "web-dev", "game-dev"],
    image: Chess2Pic,
    link: "https://chess2.otterpop.io/",
}

export const DinoDig: ProjectInfo = {
    title: "Dino Dig",
    description: [
        "A recreation of the Pokemon Grand Underground digging minigame. One of the first React projects I worked on, and it definitely shows...",
        "There's a fork of this somewhere with more 'idle game' mechanics, including an infinite grid and a shop. I was never able to get it into a state that I felt satisfied releasing... I would be more motivated to continue work on it if it wasn't so derivative.",
    ],
    tags: ["react", "typescript", "web-dev", "game-dev"],
    image: DinoDigPic,
    link: "https://dinodig.otterpop.io/",
}

export const YCH: ProjectInfo = {
    title: "YCH",
    description: [
        "YCH is an online implementation of a card game that my partner made! The Drawer chooses one of three 'character' cards and one of three 'action' cards, then draw their combination as the other players try to guess! The UI/UX was heavily inspired by the Jackbox Games suite of party games.",
        "The front end is React and Redux; the back end is Node.js, and both use Socket.io as middleware to control websockets and maintain a channel of communication between the clients and the server. Most of my previous projects were only front end, so this was a fun opportunity to flex my full stack abilities. It helped to create a separate package that contained only interface definitions so that the client and server packages could maintain a common standard of communication. It was very reminiscent of my time as a professional software engineer.",
        "The game was a success among friends! I opened it up to the public, but I quickly came to realize that the volume of traffic to the site increased my server costs dramatically. It ended up being unsustainable for me to keep the site up, especially when the game could be played physically or on simulators like Tabletop Simulator. It could be interesting to explore a P2P implementation but that seems fairly difficult to do from a web browser. Jackbox Games have a very interesting talk at AWS re:Invent 2015 that detail their cloud computing tech stack and alternative revenue streams that let them mitigate these issues.",
        "There were a lot of fun little optimizations involved in maintaining a shared drawing canvas and communicating that downstream to the other players in the lobby. While it wasn't mentioned in the talk, Jackbox intentionally avoided creating games that required constant streams of data between players to minimize costs. I would love to work more on a project like this but it doesn't seem sustainable beyond a private experience with friends.",
    ],
    tags: ["react", "typescript", "web-dev", "game-dev", "full-stack"],
    image: YCHPic,
    link: NO_LINK,
    blurb: "RETIRED",
}

export const DHOF: ProjectInfo = {
    title: "Destiny: Hands of Fate",
    description: [
        "Destiny: Hands of Fate is an original card game designed collaboratively with two of my friends. Players may play Blessings on their board and Blights on the opponent's board to reduce the opponent's life to zero. Each deck starts with their Hero in the middle of their 3x3 board and players may activate up to one of their abilities each turn.",
        "The three of us are long-time Magic the Gathering fans and this project was borne out of our love for creating custom cards and custom sets using MtG as a framework. Our shared experience with the game gave us a common language for card design and gave us several rule-of-thumbs that allowed us to quickly iterate and balance designs. Although the 3x3 board and hero card was a commonality between all designs, different mechanics and systems for drawing and resources changed drastically throughout the development.",
        "It was extremely fun to write and maintain game design documents for the project and to develop systems that allowed us to collaboratively edit and design new cards. I was able to make a rudimentary simulator for the game that used Monte Carlo simulations in order to roughly determine the strength of new cards and mechanics.",
        "Unfortunately, the team dissolved due to creative differences between two of the members. Three 'Starter Decks' were created and balanced around each other, but the game ultimately never left the prototyping and playtesting phase. If these creative differences were resolved, I would love to continue working on this game.",
    ],
    tags: ["game-design", "game-dev"],
    image: DHOFPic,
    link: NO_LINK,
    blurb: "CREATIVE LIMBO",
}

export const CraftableMannequins: ProjectInfo = {
    title: "Craftable Mannequins",
    description: [
        "Craftable Mannequins is a mod for the game Project Zomboid... which is a game I don't really play! My partner is a big fan of the game and asked me to make a quality-of-life mod that allows players to craft an item that doesn't have a recipe. At their behest, I made the mod publicly available on the Steam workshop. It turns out that a lot of people also wanted this functionality in the game, and it quickly gained a lot of supporters! At the moment, 20,000 people have downloaded the mod.",
        "It was a fun exercise in reverse engineering trying to figure out how to mod the game. It's developed by a small indie studio and it lacks a lot of documentation. It also recently had an update that rewrites a large chunk of the code base and is NOT backwards compatible with mods on the old version. It felt like a classic software engineering task to be dropped into a codebase with very little context and asked to implement a small feature.",
    ],
    tags: ["modding", "lua"],
    image: CraftableMannequinsPic,
    link: "https://steamcommunity.com/sharedfiles/filedetails/?id=3054341059",
}

export const PooltoyZ: ProjectInfo = {
    title: "PooltoyZ",
    description: [
        "Second verse: same as the first!",
        "This was the second mod I made for Project Zomboid. It currently sits at 3,500 downloads. It was fun to model and texture with a low-poly style in mind. Figuring out the spawn distributions for the various objects took some more reverse-engineering, although it wasn't quite as hard as the first time now that I knew where to look for more support.",
    ],
    tags: ["modding", "lua", "blender"],
    image: PooltoyZPic,
    link: "https://steamcommunity.com/sharedfiles/filedetails/?id=3046131960",
}

export const Commander: ProjectInfo = {
    title: "Commander Draft Set",
    description: [
        "It shouldn't be a surprise that I really like Magic: the Gathering. Cube format allows players to draft cards from a shared 'cube' of cards that can range in size from hundreds of cards to thousands of cards. Commander format gives players access to a single Legendary Creature that they can cast at any time. This custom draft set melds the two together and lets players draft a commander deck! This idea was SO GOOD that Wizards of the Coast OBVIOUSLY copied me for their 2020 set Commander Legends.",
        "But more seriously, it was fun to curate a custom list of cards for players to draft. I scraped the popular Commander format website EDHRec to analyze and heuristically generate sets of cards that worked well together. I was then able to create a lua-coded game object for Table Top Simulator that automatically generates packs of the cards to make it easy for players to draft.",
    ],
    tags: ["game-design", "blender", "lua"],
    image: CommanderPic,
    link: "https://moxfield.com/decks/9pxKZRc9vka8eNLJTV2G9A",
}

export const Lugia: ProjectInfo = {
    title: "Lugia VRChat Avatar",
    description: [
        "This Lugia VRChat avatar was the first VRChat avatar that I put up for public sale! It was my first experience with putting out a product for the general public; and it came with it's own unique set of challenges. It required me to research the competition on the market and see what features were accepted to be the 'standard' for similar products and price points. It also required me to write documentation for installation and modification of the avatar for users who may not be as familiar with Blender and Unity.",
        "I ended up spending way longer on this avatar than I should have as I fretted over smaller details that took up a disproportionate amount of time for how impactful they were to the overall avatar. I learned a lot from the experience, and it took my Blender and Unity skills to the next level. It taught me how to market both myself and a product, and how to manage and respond to customer feedback.",
    ],
    tags: ["blender", "vrchat", "substance-painter", "marketing"],
    image: LugiaPic,
    link: "https://otterpopuwu.gumroad.com/l/mommylugia",
}

export const Otter: ProjectInfo = {
    title: "Otter VRChat Avatar",
    description: [
        "A personal VRChat avatar for myself!",
        "This was my first model in Blender that wasn't a tutorial or a total embarrassment. It was my first serious attempt at gaining a deep understanding of a new skill other than programming. I never considered myself an artistically inclined individual, but 3D modeling showed that I had the capacity to express myself and pick up new skills with enough determination. I have reworked the model once since release although the overall design has stayed the same.",
        "I learned a lot about rigging, UV editing, and texturing from this project. It also taught me more about the VRChat SDK and how to optimize models for use in VRChat. I used a lot of resources from career animators and artists to make my model as professional as possible, and it gave me a great foundational workflow for 3D modeling.",
        "This was a deeply personal project for me and led to a lot of interesting friends and opportunities that changed my life for the better :D",
    ],
    tags: ["blender", "vrchat", "substance-painter"],
    image: OtterPic,
    link: NO_LINK,
}

export const NicePotion: ProjectInfo = {
    title: "Potion Puzzles POC",
    description: [
        "Potion Puzzles was my first attempt at making a game in Unity! The player is given a set of reagents shaped like tetrominoes that flip the colored lights on the board when placed down. I wanted players to unlock an increasingly larger number of ingredients that would allow them to make potions worth more points.",
        "A lot of the work for this project was done in Python, as I wrote a solver to both generate and solve different boards in order to select the tetromino shapes that would lead to the largest number of solvable puzzles. I realized pretty quickly that generating solutions for multiple pieces created board states that could quickly be solved by placing one or two pieces. Generating solutions for larger boards generated a LOT of solutions that were supersets of trivial 3x3 solutions, and it was hard to wade through the garbage. I eventually scrapped the idea, but it was a fun experience that sparked my interest in game dev.",
    ],
    tags: ["unity", "blender", "c#", "python"],
    image: NicePotionPic,
    link: NO_LINK,
    blurb: "CONCEPT"
}

export const Mario64: ProjectInfo = {
    title: "Mario 64 Player Mod",
    description: [
        "It's a me, Otter!",
        "Working with older engines and ROMS provides a unique set of challenges in both modeling and in integration. The engine heavily limits polygon count and texture size which leads to a lot of fun optimizations that can be applied to game assets today.",
        "Luckilly, a lot of popular older games have sizable communities have rudimentary guides and tools for getting started with their own unique learning curves and limitations.",
    ],
    tags: ["modding", "blender", "c++"],
    image: Mario64Pic,
    link: NO_LINK,
}

export const LethalCompany: ProjectInfo = {
    title: "Lethal Company Player Models",
    description: [
        "As part of a Lethal Company stream for streamer friends, I imported their existing models into the popular game Lethal Company. Honestly, this wasn't too difficult as it's written in Unity which was what the models were designed for. Still, it wasn't trivial and required a fair amount of Unity knowledge."
    ],
    tags: ["modding", "blender", "unity"],
    image: LethalCompanyPic,
    link: NO_LINK,
}

export const RPG: ProjectInfo = {
    title: "Upcoming Co-Op Narrative RPG",
    description: [
        "My current project!",
        "The narrative design is largely inspired by Disco Elysium but includes a Co-Op component inspired by games like It Takes Two. While this isn't my attempt at a project with networked code, it is my most serious attempt at one. Networking introduces a large number of interesting considerations that require careful architectural and composition choices during the planning phase.",
        "The project is still in it's early stages of narrative design and playtesting, but the foundation has been laid and should allow me and my partner to focus more on creating content for the game.",
    ],
    tags: ["game-dev", "unity", "c#", "networking", "blender"],
    image: RPGPic,
    link: NO_LINK,
    blurb: "IN PROGRESS",
}

export const ThisSite: ProjectInfo = {
    title: "This Website!",
    description: [
        "Creating this site was BLEUGH at times and incredibly cathartic at others. It's horrifying to put your creative endeavours out into the world, but it's also fruitful to see them all come together in one place. There's a ton of 3D models and projects involving full-stack, networking, and machine learning that just weren't impressive enough on their own or just never got into a presentable state for a larger audience.",
        "If you've made it this far, then thank you for taking any time out of your day to read through some or all of these entries! It truly means a lot to me.",
        "Also, hire me, please. :D",
    ],
    tags: ["react", "typescript", "front-end"],
    image: WebsitePic,
    link: NO_LINK,
}