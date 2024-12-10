import type { Metadata } from 'next';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import Gallery from '@/components/gallery';
import Hero from '@/components/hero';
import Media from '@/components/media';
import ProjectIntro from '@/components/projectIntro';
import Text from '@/components/text';

const marqueeData = {
	agency: 'ROX Digital Agency',
	client: 'Amvest',
	year: '2024',
	scope: 'Concepting, UI/UX Design',
};

export const metadata: Metadata = {
	title: 'Amvest - case study by LabelNoir',
};

const Page = () => (
	<main>
		<Hero background="/cases/amvest/thumbnail.jpg" dark={false}>
			<h1>Finding your dream house made easy</h1>
		</Hero>

		<Marquee autoFill className="border-b border-noir-700 py-6 xl:py-8">
			{Object.entries(marqueeData).map(([key, value]) => (
				<span key={key} className="px-6 text-2xl xl:px-12 xl:text-5xl xl:font-light">
					{value}
					<sup className="ml-1 text-sm capitalize text-noir-300 xl:ml-3 xl:text-3xl">
						({key})
					</sup>
				</span>
			))}
		</Marquee>

		<ProjectIntro
			logo={{
				src: '/cases/amvest/logo.svg',
				width: 90,
				height: 90,
			}}
			url="https://amvest.nl"
		>
			<p className="intro">
				As a leading real estate developer, Amvest sought to modernize their house finder.
				Although technically separate applications, the redesign should integrate
				seamlessly. Consistent in project styling and a user-friendly experience. The
				redesign aims to balance functionality and aesthetics. On the technical side, it
				needs to integrate HubSpot. To achieve this vision, Amvest partnered with ROX to
				design and develop the new version.
			</p>
		</ProjectIntro>

		<Media>
			<Image
				src="/cases/amvest/amvest-office.jpg"
				alt="View from the Amvest office building"
				width={2000}
				height={1333}
			/>
		</Media>

		<Text>
			<h2>Problem statement</h2>
			<p>
				Amvest has been looking to improve their work efficiency and processes with HubSpot.
				As part of this improvement, the house finder tool needs to be improved. The goal
				was to create a uniform layout. One that would not only enhance brand consistency
				but also improve usability. This redesign needed to integrate seamlessly with
				HubSpot for data management.
			</p>
		</Text>

		<Media>
			<Image
				src="/cases/amvest/laptop.jpg"
				alt="Laptop showing the design of the Hortus Flores house finder"
				width={1920}
				height={1280}
			/>
		</Media>

		<Text>
			<h2>Research & insights</h2>
			<p>
				The project started of with a comprehensive benchmarking session. During this
				session, we compared a wide variety of house finders. For content pages we extended
				the insights to other sectors like vacation bookings. This cross-industry approach
				provided innovative solutions. By applying Jakob's Law, we used familiar interface
				elements to keep everything simple.
			</p>
		</Text>

		<Media>
			<Image
				src="/cases/amvest/mobile-detailpage.jpg"
				alt="Mobile detail page highlighting a specific house"
				width={1920}
				height={1133}
			/>
		</Media>

		<Text>
			<h2>Design process</h2>
			<p>
				The redesign emphasized user flexibility. Visitors were provided two main modes of
				searching. For the visual inclined visitor we provided a map interface. More data
				driven visitors can orientate and compare through a list view. Key functionality was
				added to enable seamless switching between these modes. Styling related, we setup a
				generic base with a styled layer on top. For this we used an existing project,
				proving the ease to match any project's unique branding.
			</p>
		</Text>

		<Gallery>
			<Image
				src="/cases/amvest/render.jpg"
				alt="Render of an Amvest project"
				width={1198}
				height={960}
			/>
			<Image
				src="/cases/amvest/mobile.jpg"
				alt="House finder on mobile"
				width={1280}
				height={1920}
			/>
		</Gallery>

		<Text>
			<h2>Final outcome</h2>
			<p>
				The result is a house finder that is both visually appealing and user-friendly. Its
				design blends in with Amvest's project websites, making it consistent and modern.
				With the new mobile design, searching a house on your phone has never been easier.
			</p>
		</Text>

		<Media>
			<Image
				src="/cases/amvest/dialogue.jpg"
				alt="List of available houses in the Dialogue"
				width={2000}
				height={1125}
			/>
		</Media>
	</main>
);

export default Page;
