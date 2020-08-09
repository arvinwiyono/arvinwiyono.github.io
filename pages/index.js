import PageLayout from "../components/PageLayout";
import PulsingText from "../components/PulsingText";
import ExternalLink from "../components/ExternalLink";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <PageLayout>
      <h1 className="text-3xl">
        I{" "}
        <PulsingText bolded color="#659FD3">
          code
        </PulsingText>
        ,
        <br />I{" "}
        <PulsingText bolded color="#49BDA8">
          make guitar covers
        </PulsingText>
        ,
        <br />I sometimes{" "}
        <PulsingText bolded color="#BD9649">
          take photos
        </PulsingText>
        .
      </h1>

      <div className="my-12 flex items-end">
        <img
          className="rounded shadow-lg w-2/5 mr-6"
          src="/profile-picture.png"
          alt="Arvin profile picture"
        />
        <h2 className="leading-tight text-2xl">
          <span className="italic">Halo</span>,
          <br />I am <span className="font-semibold">Arvin Wiyono</span>
          <br />
          <span className="text-sm text-gray-700">
            ... or commonly known as <code>@awiy1</code>.
          </span>
        </h2>
      </div>

      <div>
        <p>
          I am a web developer based in Melbourne, Australia. I graduated as the{" "}
          <ExternalLink url="https://www.monash.edu/it/about-us/news-and-events/latest/articles/2018/outstanding-fit-students-recognised">
            DUX of BSE from Monash University in 2018
          </ExternalLink>{" "}
          and am fairly new in the software engineering industry.
        </p>
        <p>
          A big passion of mine is creating beautiful software that solves
          real-world problems for real people.
        </p>
        <p>
          I am now working as a developer at{" "}
          <ExternalLink url="https://au.jora.com">jora.com</ExternalLink> - part
          of <ExternalLink url="https://seek.com.au">seek.com.au</ExternalLink>{" "}
          - helping people live more fulfilling working lives by gathering and
          serving jobseekers millions of jobs worldwide. I work mostly with{" "}
          <span className="font-semibold">Ruby on Rails</span>,{" "}
          <span className="font-semibold">JavaScript</span>, and{" "}
          <span className="font-semibold">Sass</span>.
        </p>
        <p>
          Let me know if you have any cool projects that I can help with! 😁
        </p>
      </div>

      <div className={styles.myLinks}>
        <p>You can find me on or say hi on:</p>
        <ExternalLink url="https://github.com/arvinwiyono">GitHub</ExternalLink>
        <ExternalLink url="https://www.linkedin.com/in/arvin-wiyono-80b5bba7/">
          LinkedIn
        </ExternalLink>
        <ExternalLink url="https://www.youtube.com/watch?v=S6-mynCaNwk">
          YouTube
        </ExternalLink>
      </div>
    </PageLayout>
  );
}
