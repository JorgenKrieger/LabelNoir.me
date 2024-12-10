import type { Metadata } from 'next';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import Gallery from '@/components/gallery';
import Hero from '@/components/hero';
import Media from '@/components/media';
import ProjectIntro from '@/components/projectIntro';
import Text from '@/components/text';

const marqueeData = {
	agency: 'ROX',
	client: 'Gebroeders Blokland',
	year: '2024',
	scope: 'Concept, UI/UX Design',
};

export const metadata: Metadata = {
	title: 'Gebroeders Blokland - case study by LabelNoir',
};

const Page = () => (
	<main>
		<Hero background="cases/gebroeders-blokland/thumbnail.jpg" dark={false}>
			<h1>Renovating an online presence</h1>
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

		<ProjectIntro logo="cases/gebroeders-blokland/logo.svg" url="https://gebroedersblokland.nl">
			<p className="intro">
				Gebroeders Blokland is a prominent name in construction and project development.
				They've requested ROX to modernize their website to reflect their updated branding.
				The redesign was envisioned as a digital extension of their expertise. Solid, a
				well-planned structure that serves their diverse stakeholders. Both through
				functionality and aesthetics.
			</p>
		</ProjectIntro>

		<Media>
			<Image
				src="cases/gebroeders-blokland/render.jpg"
				width={1920}
				height={960}
				alt="Render of a new project in development"
			/>
		</Media>

		<Text>
			<h2>Laying the foundation</h2>
			<p>
				The redesign was approached as a cornerstone to modernize their digital presence. A
				robust online platform reflecting structural integrity and innovation. Also often
				seen in their construction projects. The new website needed to reinforce their
				reputation as forward-thinking and sustainable. It should also create a platform for
				better engagement with partners and stakeholders.
			</p>
		</Text>

		<Media>
			<Image
				src="cases/gebroeders-blokland/table.jpg"
				width={1920}
				height={1440}
				alt="The website on a tablet laying on a coffee table"
			/>
		</Media>

		<Text>
			<h2>Blueprints for success</h2>
			<p>
				Every good construction starts with a good plan. This one started with a
				collaboration between the client, a marketing agency and ROX. Together, we
				identified key functional and aesthetic requirements. We started with a sitemap,
				flowcharts and wireframes. These became the blueprint for further development of the
				new website.
			</p>
		</Text>

		<Gallery>
			<Image
				src="cases/gebroeders-blokland/mobile.jpg"
				width={1280}
				height={1920}
				alt="Man looking at the gebroeders Blokland website on mobile"
			/>
			<Image
				src="cases/gebroeders-blokland/staff.jpg"
				width={1035}
				height={1440}
				alt="Gebroeders Blokland staff on site"
			/>
		</Gallery>

		<Text>
			<h2>Constructing the digital experience</h2>
			<p>
				The website’s design was crafted with a modular page builder in mind. This provided
				Gebroeders Blokland the flexibility to construct custom layouts using pre-designed
				blocks. Through well planned out blocks it’s easy to build extensions to the
				existing website. By doing so, we provided room for growth whenever new requirements
				arise.
			</p>
		</Text>

		<Media>
			<Image
				src="cases/gebroeders-blokland/couch.jpg"
				width={3000}
				height={1500}
				alt="Laptop with the team on a couch"
			/>
		</Media>
		<Media>
			<Image
				src="cases/gebroeders-blokland/laptop.jpg"
				width={1920}
				height={960}
				alt="Laptop with projects on a coffee table"
			/>
		</Media>
	</main>
);

export default Page;
