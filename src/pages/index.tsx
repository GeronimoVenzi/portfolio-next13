import Head from "next/head";
import Image from "next/image";

import { useState } from "react";

// import planodi from "../assets/planodi.jpg";
// import zapcard from "../assets/zapcard.png";
import cdv from "../assets/cdv.png";
import css from "../assets/css.webp";
import docker from "../assets/docker.svg";
import destinos from "../assets/destinos.png";
import DownloadIcon from "@/icons/DownloadIcon";
import EmailIcon from "@/icons/EmailIcon";
import express from "../assets/express.png";
import git from "../assets/git.png";
import GithubIcon from "@/icons/GithubIcon";
import html from "../assets/html.png";
import jest from "../assets/jest.png";
import js from "../assets/js.png";
import LinkedinIcon from "@/icons/LinkedinIcon";
import LinkIcon from "@/icons/LinkIcon";
import logoMin from "../assets/logo-min.svg";
import logoAutodatee from "../assets/logo-autodatee.png";
import materialui from "../assets/materialui.png";
import mongodb from "../assets/mongodb.svg";
import mysql from "../assets/mysql.svg";
import nextjs from "../assets/next-js.svg";
import nestjs from "../assets/nestjs.svg";
import node from "../assets/node.png";
import PhoneIcon from "@/icons/PhoneIcon";
import postgre from "../assets/postgres.png";
import postman from "../assets/postman.svg";
import profilePic from "../assets/profile-pic.png";
import reactlogo from "../assets/react.png";
import Section from "@/components/Section";
import Tags from "@/components/Tags";
import tailwind from "../assets/tailwind.png";
import ts from "../assets/ts.png";
import TwitterIcon from "@/icons/TwitterIcon";
import vite from "../assets/vite.png";
import vscode from "../assets/vscode.png";
import vue from "../assets/vue.png";

export default function Home() {
  const [showCopiedEmail, setShowCopiedEmail] = useState(false);
  const [showCopiedNumber, setShowCopiedNumber] = useState(false);

  return (
    <>
      <Head>
        <title>Gerónimo Venzi</title>
        <meta name="description" content="CV Gerónimo Venzi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <main className="wrapper text-slate-800 ">
        <div className="bg-cover relative">
          <Image
            src={profilePic}
            alt="Profile picture"
            width={150}
            height={150}
            className="rounded-full border-4 border-white absolute -bottom-20 left-6"
          />
        </div>
        <div className="flex gap-4 ml-8 mt-24 flex-wrap md:ml-52 md:mt-6 items-center justify-start">
          <a
            href="https://twitter.com/_gerovenzi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="pb-1" size={31} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/geronimo-venzi-a6367321b/"
          >
            <LinkedinIcon size={31} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/GeronimoVenzi"
          >
            <GithubIcon size={30} />
          </a>
          <a
            href="/cv-frontend-venzi.pdf"
            download
            className="bg-slate-800 text-white px-3 rounded-md flex items-center justify-center py-1"
          >
            <DownloadIcon className="mr-2" />
            Download CV
          </a>
        </div>
        <div className="flex gap-4 ml-8 mt-24 flex-wrap md:ml-52 md:mt-6 items-center justify-end"></div>
        <div className="mt-6 md:mt-12 px-8 mb-10">
          <div className="flex flex-col md:flex-row gap-40">
            <div className="w-full md:w-1/2">
              <p className="text-3xl">Gerónimo Venzi</p>
              <p className="text-xl">Fullstack Developer</p>
              <p className="text-lg text-slate-500">Buenos aires, Argentina</p>
              <p
                className="flex mt-3 cursor-pointer"
                onClick={() => {
                  setShowCopiedEmail(true);
                  navigator.clipboard.writeText("geronimovenzi@live.com.ar");
                  setTimeout(() => {
                    setShowCopiedEmail(false);
                  }, 2000);
                }}
              >
                <EmailIcon className="mr-3" size={20} />
                geronimovenzi@live.com.ar{" "}
                {showCopiedEmail && (
                  <span className="fade-in-out bg-slate-100 text-slate-800 text-sm px-2 rounded-full ml-4 mt-1">
                    Copied to clipboard!
                  </span>
                )}
              </p>
              <p
                className="flex mt-3 cursor-pointer"
                onClick={() => {
                  setShowCopiedNumber(true);
                  navigator.clipboard.writeText("+5492284229818");
                  setTimeout(() => {
                    setShowCopiedNumber(false);
                  }, 2000);
                }}
              >
                <PhoneIcon className="mr-3" size={20} />
                +54 9 2284229818{" "}
                {showCopiedNumber && (
                  <span className="fade-in-out bg-slate-100 text-slate-800 text-sm px-2 rounded-full ml-4 mt-1">
                    Copied to clipboard!
                  </span>
                )}
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <p className="mb-8 text-2xl border-b-2 border-slate-100">
                Languages
              </p>
              <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                <tbody className="text-gray-800">
                  <tr className="border-b border-slate-300">
                    <td className="px-4 py-3">Spanish</td>
                    <td className="pl-6 py-3">Native speaker</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">English</td>
                    <td className="pl-6 py-3">B1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-12 mb-8 text-xl border-b-2 border-slate-100">
            Work Experience
          </p>
          <div className="flex flex-col gap-6">
            <Section
              position="Fullstack Developer"
              institution="Provincial Directorate of Information Technology and Communications"
              period="March 2023 - Present"
              place="La Plata, Buenos Aires, Argentina (Hybrid)"
              image={logoMin}
              skills="Developer, Maintainer"
            />
            <Section
              position="Web Developer"
              institution="Autodatee"
              period="April 2022 - March 2023"
              place="Buenos Aires, Argentina (Remote)"
              image={logoAutodatee}
              skills="Product Developer, Maintainer"
            />
          </div>
          <p className="mt-6 text-xl border-b-2 border-slate-100">
            Online Projects
          </p>
          <div className="flex mt-2 gap-5 flex-wrap">
            <a
              href="https://coberturadevacantes.mjus.gba.gob.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex shadow border border-gray-50 px-2 py-2 rounded-xl gap-4 justify-center items-start cursor-pointer h-32 w-full md:w-96 overflow-hidden">
                <div className="flex flex-col">
                  <div className="relative h-20 w-20 overflow-hidden rounded-md">
                    <Image
                      alt="logo"
                      src={cdv}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="text-xs mt-2 flex items-center justify-center m-0">
                    Status: Live{" "}
                    <div className="w-2 h-2 bg-green-300 rounded-full ml-1" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="mb-2 font-semibold flex">
                    Cobertura de Vacantes{" "}
                    <LinkIcon size={14} className="mt-1 ml-3" />
                  </p>
                  <p className="text-sm">
                    Platform so that the Ministry of Justice can have better
                    control of the process of filling vacancies for judges and
                    magistrates of the Judicial Branch of the PBA.
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://destinos.mjus.gba.gob.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex shadow border border-gray-50 px-2 py-2 rounded-xl gap-4 justify-center items-start cursor-pointer h-32 w-full md:w-96 overflow-hidden">
                <div className="flex flex-col">
                  <div className="relative h-20 w-20 overflow-hidden rounded-md">
                    <Image
                      alt="logo"
                      src={destinos}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="text-xs mt-2 flex items-center justify-center m-0">
                    Status: Live{" "}
                    <div className="w-2 h-2 bg-green-300 rounded-full ml-1" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="mb-2 font-semibold flex">
                    Destinos <LinkIcon size={14} className="mt-1 ml-3" />
                  </p>
                  <p className="text-sm">
                    Centralized digital report of each destination within the
                    Ministry of Justice. Provides key details such as
                    authorities, address, number of inmates, capacity.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <p className="mt-12 mb-8 text-xl border-b-2 border-slate-100">
            Skills
          </p>
          <p className="text-lg font-semibold mt-4 ">Tech Stack</p>
          <h3 className="p-2 mt-3 font-medium bg-slate-100 w-24">Frontend</h3>
          <div className="flex mt-3 gap-3 flex-wrap">
            <Tags name="Javascript" image={js} />
            <Tags name="Typescript" image={ts} />
            <Tags name="React" image={reactlogo} />
            <Tags name="Vue" image={vue} />
            <Tags name="Next js" image={nextjs} />
            <Tags name="Vite" image={vite} />
            <Tags name="HTML" image={html} />
            <Tags name="CSS" image={css} />
            <Tags name="Material UI" image={materialui} />
            <Tags name="Tailwind" image={tailwind} />
          </div>
          <h3 className="p-2 font-medium mt-3 bg-slate-100 w-24">Backend</h3>
          <div className="flex mt-3 gap-3 flex-wrap">
            <Tags name="Docker" image={docker} />
            <Tags name="Nest js" image={nestjs} />
            <Tags name="Node js" image={node} />
            <Tags name="Express" image={express} />
            <Tags name="Jest" image={jest} />
            <Tags name="MongoDB" image={mongodb} />
            <Tags name="MySQL" image={mysql} />
            <Tags name="PostgreSQL" image={postgre} />
          </div>
          <h3 className="p-2 font-medium mt-3 bg-slate-100 w-36">
            Developer tools
          </h3>
          <div className="flex mt-3 gap-3 flex-wrap">
            <Tags name="Git" image={git} />
            <Tags name="VSCode" image={vscode} />
            <Tags name="Postman" image={postman} />
          </div>
        </div>
      </main>
    </>
  );
}
