import Head from "next/head";
import ProjectAbout from "../components/ProjectDetails/ProjectAbout";
import RecentProject from "../components/ProjectDetails/RecentProject";
import PageBanner from "./../components/Common/PageBanner";

export default function ProjectDetails() {
	return (
		<>
			<Head>
				<title>Project Details Page</title>
			</Head>
			<PageBanner
				title="Creative Art Work"
				content="A Business Portfolio Accurately Describes The Strengths Of A Company & Helps The Company Utilize The Most Attractive."
			/>
			<ProjectAbout />
			<RecentProject />
		</>
	);
}
