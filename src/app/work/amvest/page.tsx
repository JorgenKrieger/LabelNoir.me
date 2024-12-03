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
			<h1>Amvest</h1>
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
				As a leading real estate developer, Amvest sought to modernize their house finder
				application to provide a seamless, user-friendly experience while ensuring
				consistency across projects. The redesign aimed to balance functionality with
				aesthetics, integrating data tools like HubSpot and offering users flexible search
				options. To achieve this vision, Amvest partnered with ROX to design and develop a
				revamped version of the tool.
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
				In an attempt to optimize work efficiency, Amvest identified the need for a cohesive
				and modern solution for their house finder tool across various project websites. The
				goal was to create a uniform layout that would not only enhance brand consistency
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
				To inform the redesign, a comprehensive benchmarking session was conducted,
				evaluating a wide range of house finders both nationally and internationally. For
				housing detail pages, the insights extended beyond the construction sector, drawing
				inspiration from platforms like Airbnb. This cross-industry approach ensured a fresh
				perspective, prioritizing innovative solutions while keeping the focus on
				housing-related functionality.
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
				The redesign emphasized user flexibility, allowing visitors to choose between two
				search modes: a visual map interface and a detail-oriented list view. Key
				functionality was added to enable seamless switching between these modes. Leveraging
				an existing project as a foundation, the design process was streamlined by the
				application of project-specific styling, ensuring the house finder could be easily
				themed to match any project’s unique branding.
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
				design aligns perfectly with Amvest's project websites, offering a consistent and
				modern interface. Furthermore, the tool's adaptability allows it to be implemented
				across various projects, ensuring its ease of use for Amvest while maintaining ease
				of use for all visitors.
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
