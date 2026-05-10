type ResumeImageData = {
  url: string
  visible: string
}

type ResumeInfosData = {
  fullName: string
  headline: string
  email: string
  website: string
  phone: string
  location: string
}

type ResumeContentData = {
  image: ResumeImageData
  infos: ResumeInfosData
}

// biome-ignore lint/correctness/noUnusedVariables: Declared in global scope; no export required
type ResumeData = {
  content: ResumeContentData
  // structure: ResumeStructureData;
}
