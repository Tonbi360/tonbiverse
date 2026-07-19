import GalleryApp from "../../features/gallery/Gallery";
import ProjectsApp from "../../features/projects/Projects";
import StoriesApp from "../../features/stories/Stories";

type Props = {
  id: string;
};

function ApplicationRenderer({ id }: Props) {
  switch (id) {
    case "gallery":
      return <GalleryApp />;

    case "projects":
      return <ProjectsApp />;

    case "stories":
      return <StoriesApp />;

    default:
      return <div>Application not found.</div>;
  }
}

export default ApplicationRenderer;