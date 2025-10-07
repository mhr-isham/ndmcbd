import { useEffect } from "react";

const usePageTitle = (pageName, dataObj) => {
  useEffect(() => {
    const head = document.head;
    document.title = `${pageName} - Notre Dame Math Club`;
    // const pageTitle = document.createElement("title");
    // pageTitle.innerHTML = `${pageName} - Notre Dame Math Club`;
    // const metaTags = [];
    // const { seoTitle, description: descriptionContent, url, image } = dataObj;
    // if (dataObj) {
    //   metaTags.push(
    //     ...[
    //       // {
    //       //   name: "description",
    //       //   content: descriptionContent,
    //       // },
    //       {
    //         property: "og:url",
    //         content: url,
    //       },
    //       {
    //         property: "og:type",
    //         content: "website",
    //       },
    //       {
    //         property: "og:title",
    //         content: seoTitle,
    //       },
    //       {
    //         property: "og:description",
    //         content: descriptionContent,
    //       },
    //       {
    //         property: "og:image",
    //         content: image,
    //       },
    //       {
    //         property: "fb:app_id",
    //         content: "852938275631874",
    //       },
    //       {
    //         property: "twitter:card",
    //         content: descriptionContent,
    //       },
    //       {
    //         property: "twitter:domain",
    //         content: "ndmcbd.org",
    //       },
    //       {
    //         property: "twitter:url",
    //         content: url,
    //       },
    //       {
    //         property: "twitter:title",
    //         content: seoTitle,
    //       },
    //       {
    //         property: "twitter:description",
    //         content: descriptionContent,
    //       },
    //       {
    //         property: "twitter:image",
    //         content: image,
    //       },
    //     ]
    //   );
    // }

    // // head.prepend(pageTitle);
    // const descriptionMetatag = document.querySelector(
    //   'meta[name="description"]'
    // );
    // if (descriptionMetatag)
    //   descriptionMetatag.setAttribute("content", descriptionContent);

    // metaTags.forEach((metaTag) => {
    //   const meta = document.querySelector(
    //     'meta[property="' + metaTag.property + '"]'
    //   );
    //   if (meta) {
    //     meta.setAttribute("content", metaTag?.content);
    //   } else {
    //     const newMetaTag = document.createElement("meta");
    //     newMetaTag.setAttribute("property", metaTag?.property);
    //     newMetaTag.setAttribute("content", metaTag?.content);
    //     head.appendChild(newMetaTag);
    //   }
    //   // head.prepend(meta);
    // });
  }, []);
};

export default usePageTitle;
