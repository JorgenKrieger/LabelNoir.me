import type { Metadata } from 'next';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import Hero from '@/components/hero';
import Media from '@/components/media';
import ProjectIntro from '@/components/projectIntro';
import Text from '@/components/text';

const marqueeData = {
	agency: 'ROX',
	client: 'UNO',
	year: '2020',
	scope: 'Concept, Interaction Design',
};

export const metadata: Metadata = {
	title: 'UNO - case study by LabelNoir',
};

const Page = () => (
	<main>
		<Hero background="cases/uno/thumbnail.jpg" dark={false}>
			<h1>UNO</h1>
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

		<ProjectIntro logo="cases/uno/logo.svg" url="https://uno.nl">
			<p className="intro">
				UNO is a strategic IT partner, specializing in Microsoft products and services to
				support companies with their digital transformation. To improve their online
				presence, UNO teamed up with ROX. Over the years, we’ve had several successful
				projects making both UNO and ROX grow.
			</p>
		</ProjectIntro>

		<Media>
			<Image
				src="cases/uno/team.jpg"
				width={1920}
				height={960}
				alt="Campaign shot showing the UNO team"
			/>
		</Media>

		<Text>
			<h2>Website 2021</h2>
			<p>
				In 2021, UNO sought to overhaul its corporate website which -at the time- was mostly
				used as a business card, to focus on lead-generation. The redesign aimed to elevate
				the site’s style to something fresher and more modern, reflecting UNO’s
				forward-thinking approach. The result was a highly flexible corporate website that
				not only embraced a contemporary aesthetic but also prioritized functionality,
				significantly enhancing its ability to generate leads.
			</p>
		</Text>

		<Media>
			<Image
				src="cases/uno/uno-2021.jpg"
				width={1920}
				height={960}
				alt="Mockup of the old UNO website"
			/>
		</Media>

		<Text>
			<h2>Design update 2023</h2>
			<p>
				After the relaunch in 2021 the effects of the new website marked a clear improvement
				in lead generation and user engagement. Over time, as UNO became more accustomed to
				the site’s new features and limitations, they identified opportunities for further
				refinement. This resulted in an big update which reflects UNO’s evolved positioning
				and renewed focus.
			</p>
		</Text>

		<Media>
			<Image
				src="cases/uno/surface-studio.jpg"
				width={1920}
				height={1280}
				alt="Surface screen with the new homepage hero"
			/>
		</Media>

		<Media>
			<Image
				src="cases/uno/dell.jpg"
				width={1920}
				height={1280}
				alt="Screen showing the your digital journey detailpage"
			/>
		</Media>

		<Text>
			<h2>Werken bij 2024</h2>
			<p>
				As UNO’s corporate website continued to perform well, the company experienced
				substantial growth. Recognizing the importance of attracting young talent to sustain
				this momentum, UNO tasked us with creating a dedicated careers website. Launched in
				2024, this new platform was designed to appeal to a young professionals, featuring a
				more playful variant of the corporate style. The site incorporates engaging
				animations and videos, making it an effective tool for recruiting the next
				generation of IT professionals.{' '}
			</p>
		</Text>

		<Media>
			<Image
				src="cases/uno/pc-werken-bij.jpg"
				width={1920}
				height={1280}
				alt="PC showing the website"
			/>
		</Media>

		<Media>
			<Image
				src="cases/uno/vacancies.jpg"
				width={1920}
				height={960}
				alt="Woman looking through available vacancies"
			/>
		</Media>
	</main>
);

export default Page;
