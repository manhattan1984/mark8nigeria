import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "fbfbDmgJURuKM2nEkzUiQh",  // ID of a project you are using
      token: "wSb0FMrsNJaMUsb7UqH7gOh9nkhchKpACbNDnEJV1AIrpRkR0GkLuLg8azGrCH2ezNN6M522ynKyXApw"  // API token for that project
    }
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
