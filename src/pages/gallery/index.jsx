import NdmcBreadcrumbs from "../../components/breadcrumbs";
import { MasonryGallery } from "../../components/shared/gallery";
import {
  PageTitleContainer,
  SectionSubtitle,
  SectionTitle,
} from "../../components/styles/Elements.style";
import usePageTitle from "../../hooks/usePageTitle";

const Gallery = () => {
  usePageTitle("Gallery");
  return (
    <div>
      <PageTitleContainer>
        <SectionSubtitle>Gallery</SectionSubtitle>
        <SectionTitle>Math Club Moments in Pictures</SectionTitle>
        <NdmcBreadcrumbs pagePath={[{ name: "Gallery", active: true }]} />
      </PageTitleContainer>

      <MasonryGallery />
    </div>
  );
};

export default Gallery;
