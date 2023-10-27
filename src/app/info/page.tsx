import { padding } from "../styles";
import Image from "next/image";

const repoData = [
    {
        name: "musicbot",
        url: "https://github.com/nikosszzz/musicbot",
        desc: "A fast Discord.JS Bot written in TypeScript using Discord.JS 14 with YouTube and Spotify support built-in.",
        extra: ["discord", "typescript"]
    },
    {
        name: "windows-app",
        url: "https://github.com/nikosszzz/windows-app",
        desc: "A test project Windows Application built in React using an Electron entrypoint. Purely experimental hobby project to mess around with Electron & React.",
        extra: ["react", "typescript"]
    },
    {
        name: "vd-plugins",
        url: "https://github.com/nikosszzz/vd-plugins",
        desc: "My Vendetta plugins.",
        extra: ["discord", "typescript"]
    },
    {
        name: "discordrn-themes",
        url: "https://github.com/nikosszzz/discordrn-themes",
        desc: "A repository consisting of Vendetta/Aliucord Themes.",
        extra: ["discord", "css"]
    }
]

const contribData = [
    {
        name: "AliucordRN",
        url: "https://github.com/Aliucord/AliucordRN",
        desc: "Aliucord Rewrite for the new Discord React Native alpha. (Not maintained)",
        extra: ["discord", "typescript", "react"]
    },
    {
        name: "bloxflip-autocrash",
        url: "https://github.com/carince/bloxflip-autocrash",
        desc: "Bloxflip crash automation using the martingale strategy. Earn robux passively while you sit back!",
        extra: ["typescript"]
    }
]

const accountData = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" width="32px" viewBox="0 0 40 32" className="mr-[10px]">
                <path xmlns="http://www.w3.org/2000/svg" fill="white" d="M 8.671875 3.726562 L 18.625 17.265625 L 8.609375 28.273438 L 10.863281 28.273438 L 19.632812 18.636719 L 26.71875 28.273438 L 34.390625 28.273438 L 23.875 13.972656 L 33.199219 3.726562 L 30.945312 3.726562 L 22.871094 12.601562 L 16.34375 3.726562 Z M 11.988281 5.417969 L 15.511719 5.417969 L 31.074219 26.582031 L 27.550781 26.582031 Z M 11.988281 5.417969 " />
            </svg>
        ),
        type: "x",
        name: "nikosszzz",
        description: "My X account.",
        url: "https://twitter.com/nikosszzz"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 512 512" className="mr-[10px]">
                <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" id="mainIconPathAttribute" fill="#ffffff" />
            </svg>
        ),
        type: "github",
        name: "nikosszzz",
        description: "My GitHub account.",
        url: "https://github.com/nikosszzz"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32px" height="32" viewBox="0 -28.5 256 256" className="mr-[10px]">
                <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#5865F2" fillRule="nonzero" />
            </svg>
        ),
        type: "discord",
        name: "deoptimize",
        description: "My Discord account.",
        url: "https://discord.com/users/327065865201909762"
    }
]

export default function Info() {
    return (
        <div className="w-screen">
            <section className="relative w-screen h-[600px] md:h-[800px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("/landingBg.webp")` }}>
                <div className={`${padding.X} absolute flex flex-col justify-center items-center h-full w-full`}>
                    <div className="w-64 p-3 md:w-96 text-2xl font-medium md:text-3xl backdrop-blur-xl text-center align-center items-center rounded-full">
                        <span>Information</span>
                        <span className="animate-typing">_</span>
                    </div>
                </div>
            </section>
            <section className={`${padding.XY} relative w-full`}>
                <p className="text-5xl md:text-6xl inline-block pr-2 pl-2 font-extrabold md:p-3 rounded-full bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d]">Repositories</p>
                <p className="text-2xl">
                    Here are some of my GitHub repositories/projects.
                </p>
                {repoData.map((d) => (
                    <div key={d.name} className="mt-4 mb-4 p-5 rounded-lg shadow bg-primary">
                        <a href={d.url} target="_blank" className="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512" className="mr-[10px]">
                                <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" id="mainIconPathAttribute" fill="#ffffff" />
                            </svg>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{d.name}</h5>
                            {
                                <div className="ml-2 h-32px w-32px" key={`${d.name}-langicons`}>
                                    <Image src={`https://skillicons.dev/icons?i=${d.extra.join(",")}`} height={64} width={64} alt={"Project language"} className="" />
                                </div>
                            }

                        </a>
                        <div className="flex-row flex font-normal text-gray-500 dark:text-gray-400">
                            <span className="mr-[5px]">
                                {d.desc}
                            </span>
                            <a href={d.url} target="_blank" className="ml-auto place-self-center h-5 inline-flex items-center rounded-full bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d] hover:underline pl-[5px] pr-[5px]">
                                Go
                                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </section>
            <section className={`${padding.XY} relative w-full`}>
                <p className="text-5xl md:text-6xl inline-block pr-2 pl-2 font-extrabold md:p-3 rounded-full bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d]">Contributions</p>
                <p className="text-2xl">
                    Here are the projects I have contributed to.
                </p>
                {contribData.map((d) => (
                    <div key={d.name} className="mt-4 mb-4 p-5 rounded-lg shadow bg-primary">
                        <a href={d.url} target="_blank" className="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512" className="mr-[10px]">
                                <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" id="mainIconPathAttribute" fill="#ffffff" />
                            </svg>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{d.name}</h5>
                            {
                                d.extra.length >= 3 ?
                                    <div className="ml-2 h-32px w-32px" key={`${d.name}-langicons`}>
                                        <Image src={`https://skillicons.dev/icons?i=${d.extra.join(",")}`} height={100} width={100} alt={"Project language"} className="" />
                                    </div>
                                    :
                                    <div className="ml-2 h-32px w-32px" key={`${d.name}-langicons`}>
                                        <Image src={`https://skillicons.dev/icons?i=${d.extra.join(",")}`} height={32} width={32} alt={"Project language"} className="" />
                                    </div>
                            }

                        </a>
                        <div className="flex-row flex font-normal text-gray-500 dark:text-gray-400">
                            <span className="mr-[5px]">
                                {d.desc}
                            </span>
                            <a href={d.url} target="_blank" className="ml-auto place-self-center h-5 inline-flex items-center rounded-full bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d] hover:underline pl-[5px] pr-[5px]">
                                Go
                                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </section>
            <section className={`lg:px-22 sm:px-16 px-6 sm:py-4 py-6 relative w-full`}>
                <p className="text-5xl md:text-6xl inline-block pr-2 pl-2 font-extrabold md:p-3 rounded-full bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d]">Find me on</p>
                {accountData.map((d) => (
                    <div key={d.type} className="mt-4 mb-4 p-5 rounded-lg shadow bg-primary">
                        <a href={d.url} target="_blank" className="flex flex-row pr-0">
                            {d.icon}
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{d.name}</h5>
                        </a>
                        <div className="flex-row flex font-normal text-gray-500 dark:text-gray-400">
                            <span className="mr-[5px]">
                                {d.description}
                            </span>
                            <a href={d.url} target="_blank" className="ml-auto place-self-center h-5 inline-flex items-center rounded-full bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d] hover:underline pl-[5px] pr-[5px]">
                                Go
                                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}