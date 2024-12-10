import Marquee from 'react-fast-marquee';

import Biography from '@/components/biography';
import Clients from '@/components/clients';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import clientData from '@/data/clients.json';

const marqueeData = [
	'Aspiring Creative Director',
	'UI Design',
	'Front-end Development',
	'User Experience',
];

const Home = () => (
	<main>
		<Hero background="background.jpeg">
			<h1>Connecting digital productions with real world experiences.</h1>
			<p>
				My name is <strong>Jörgen</strong>. An aspiring creative director from{' '}
				<strong>Rotterdam, The Netherlands 🌷.</strong> I specialize crafting digital
				products that enrich everyday life.
			</p>
		</Hero>

		<Marquee autoFill className="border-b border-noir-700 py-6 xl:py-8">
			{marqueeData.map(text => (
				<span key={text} className="px-6 text-2xl xl:px-12 xl:text-5xl xl:font-light">
					{text}
				</span>
			))}
		</Marquee>

		<Projects />

		<Clients data={clientData}>
			Over the past decade I’ve worked with an array of local and international clients and
			industry professionals.
		</Clients>

		<Biography />
	</main>
);

export default Home;
