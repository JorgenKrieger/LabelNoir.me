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
	client: 'Heijmans Vastgoed',
	year: '2018 – 2024',
	scope: 'Concept, UI/UX Design',
};

export const metadata: Metadata = {
	title: 'Heijmans Vastgoed - case study by LabelNoir',
};

const Page = () => (
	<main>
		<Hero background="cases/heijmans-vastgoed/thumbnail.jpg" dark={false}>
			<h1>Heijmans Vastgoed</h1>
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
			logo="cases/heijmans-vastgoed/mark.svg"
			url="https://www.heijmans.nl/nl/projecten/?market=9"
		>
			<p className="intro">
				Every year, Heijmans embarks on numerous housing projects, each defined by its
				unique foundation and concept. Creating individual websites for these projects posed
				a significant challenge due to the substantial time and cost involved. To address
				this, Heijmans turned to ROX to develop a scalable solution that could streamline
				the website creation process while preserving each project's distinct identity.
			</p>
		</ProjectIntro>

		<Media>
			<Image
				src="cases/heijmans-vastgoed/construction-site.jpg"
				width={1920}
				height={960}
				alt="A construction site showing a Heijmans container"
			/>
		</Media>

		<Text>
			<h2>Problem statement</h2>
			<p>
				The main challenge was twofold. From a design perspective, we needed to find a way
				to reflect the unique identities of various projects within a single unified design
				system. On the technical side, it was essential to optimize processes to
				significantly reduce costs and time to deploy new project websites.
			</p>
		</Text>

		<Text>
			<h2>Research</h2>
			<p>
				To address these challenges, we analyzed a wide range of existing projects to
				identify both their commonalities and their differences, which helped us scope our
				solution. Additionally, we cataloged all the content types required for the
				websites, ensuring our solution would accommodate every possible need.
			</p>
			<p>
				Finally, it became clear that Heijmans’ marketeers would create websites themselves.
				This emphasized the need to create a system that is flexible, quick and easy to set
				up project websites with.
			</p>
		</Text>

		<Media>
			<Image
				src="cases/heijmans-vastgoed/styles.jpg"
				width={1920}
				height={960}
				alt="Various style designs for different Heijmans projects"
			/>
		</Media>

		<Text>
			<h2>Design Approach</h2>
			<p>
				For the design, a modular design system has been created that offers both
				flexibility and efficiency. A customizable base system was developed, enabling the
				adaptation of colors, fonts, and block styling to create a unique website that
				matched the project’s brand identity. This system was designed to be expandable,
				making it easy to iterate and create new content blocks when new requirements arise.
			</p>
			<p>
				On core functionality we introduced was an integrated plot map, which allows
				visitors to explore housing availability through a visual map. By doing so, we
				enhanced the user experience by both making it easy to discover your ideal house, as
				well as helping the visitor to imagine living in the new built area.
			</p>
		</Text>

		<Gallery>
			<Image
				src="cases/heijmans-vastgoed/bellevue.jpg"
				width={3000}
				height={2000}
				alt="The Bellevue website on a laptop next to a dog"
			/>
			<Image
				src="cases/heijmans-vastgoed/mobile.jpg"
				width={1080}
				height={1619}
				alt="A man looking at the Fortenkavels project website"
			/>
		</Gallery>

		<Text>
			<h2>Results</h2>
			<p>
				The new system drastically improved Heijmans' approach to website creation. By
				adopting this solution, the cost of developing project websites was reduced by an
				impressive 80%. The timeline for launching a website shrank from four weeks to just
				three days. Furthermore, the technical integration enabled continuous improvement
				across all websites, allowing iterative updates and ensuring the system remains
				effective as new needs arise.
			</p>
		</Text>

		<Media>
			<Image
				src="cases/heijmans-vastgoed/laptops.jpg"
				width={1920}
				height={1280}
				alt="Various Heijmans projects on laptop mockups"
			/>
		</Media>
	</main>
);

export default Page;
