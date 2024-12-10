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
	client: 'Blauwhoed',
	year: '2024',
	scope: 'Concept, UI/UX Design',
};

export const metadata: Metadata = {
	title: 'Blauwhoed - case study by LabelNoir',
};

const Page = () => (
	<main>
		<Hero background="cases/blauwhoed/thumbnail.jpg" dark={false}>
			<h1>Streamlining the path to homeownership</h1>
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

		<ProjectIntro logo="cases/blauwhoed/logo.svg">
			<p className="intro">
				Blauwhoed, renowned for their high-quality housing projects, approached ROX with the
				goal of enhancing their digital experiences and future-proofing their online
				presence. Through a series of collaborative sessions, we identified key pain points
				and untapped opportunities, paving the way for a significant transformation in how
				visitors interact with Blauwhoed's digital platforms. Our work focused on
				drastically improving the overall experience for both users and Blauwhoed, ensuring
				a more streamlined and efficient process for all involved.{' '}
			</p>
		</ProjectIntro>

		<Media>
			<Image
				src="cases/blauwhoed/wireframes.jpg"
				width={1920}
				height={960}
				alt="Several wireframes of the template"
			/>
		</Media>

		<Text>
			<h2>Problem statement</h2>
			<p>
				Blauwhoed faced a challenge in improving the customer journey for prospective
				homebuyers. The process involved numerous touch points, which made the overall
				experience cumbersome and labor-intensive. This complexity led to frustration for
				both the customers and the Blauwhoed team, underscoring the need for a streamlined
				solution.
			</p>
		</Text>

		<Text>
			<h2>Research & insights</h2>
			<p>
				To address the challenges, we facilitated a series of creative sessions with the
				client and key stakeholders. These workshops proved invaluable in uncovering core
				challenges and identifying potential opportunities for improvement. By conducting
				trend analyses and developing detailed personas, we gained a nuanced understanding
				of the diverse needs and expectations of Blauwhoed's customers. Mapping out both the
				current and ideal customer journeys allowed us to combine these insights and
				establish a clear foundation for designing the new project websites.
			</p>
		</Text>

		<Media>
			<Image
				src="cases/blauwhoed/parcour-homepage.jpg"
				width={1920}
				height={1280}
				alt="Hero for the template in the Parcour project style"
			/>
		</Media>

		<Text>
			<h2>Design process</h2>
			<p>
				The design phase began with the creation of a high-fidelity wireframe prototype,
				allowing us to test user flows in various project phases. We adopted a modular
				approach to page design, allowing for the reuse of content blocks to create a
				versatile array of pages. Each template came with a default setup but could be
				easily customized to meet the unique requirements of individual projects. To ensure
				consistency while maintaining flexibility, we introduced a theming system that
				enabled a complete overhaul of the visual identity with minimal effort. This
				approach made the template adaptable, efficient, and scalable.
			</p>
		</Text>

		<Gallery>
			<Image
				src="cases/blauwhoed/actueel-mockup.jpg"
				width={1920}
				height={1270}
				alt="Laptop with news overview design"
			/>
			<Image
				src="cases/blauwhoed/woningzoeker.jpeg"
				sizes="50vw"
				width={1920}
				height={1920}
				alt="House finder design on mobile"
			/>
		</Gallery>

		<Text>
			<h2>Outcome</h2>
			<p>
				The collaboration has already seen tangible results, with the second phase of the
				project successfully launched. The development team is now focused on the third
				iteration, which will integrate the final and essential functionalities necessary to
				initiate the sales process. As the project progresses, additional insights will
				continue to be gathered and incorporated.
			</p>
		</Text>

		<Media>
			<Image
				src="cases/blauwhoed/woningtypes.jpg"
				width={1920}
				height={960}
				alt="Overview of pasta based recipes"
			/>
		</Media>
	</main>
);

export default Page;
