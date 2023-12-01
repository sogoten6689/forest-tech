
 export interface HeaderType {
    title: string;
    paragraph: string;
  }
  
  export interface AboutType {
    paragraph: string;
    Why: string[];
    Why2: string[];
  }
  
  export interface GalleryItemType {
    title: string;
    largeImage: string;
    smallImage: string;
  }
  
  export interface ServiceType {
    icon: string;
    name: string;
    text: string;
  }
  
  export interface TestimonialType {
    img: string;
    text: string;
    name: string;
  }
  
  export interface TeamMemberType {
    img: string;
    name: string;
    job: string;
  }
  
  export interface ContactType {
    address: string;
    phone: string;
    email: string;
    facebook: string;
    twitter: string;
    youtube: string;
  }
  
  export interface FeatureType {
    icon: string;
    title: string;
    text: string;
  }

  export interface AppDataType {
    Header: HeaderType;
    About: AboutType;
    Gallery: GalleryItemType[];
    Services: ServiceType[];
    Testimonials: TestimonialType[];
    Team: TeamMemberType[];
    Contact: ContactType;
    Features: FeatureType[];
  }

  // Function to read JSON data from file
// function readJsonFile(filePath: string): AppDataType | null {
//     try {
//       const jsonData = fs.readFileSync(filePath, 'utf8');
//       return JSON.parse(jsonData);
//     } catch (error) {
//     //   console.error(`Error reading JSON file: ${error.message}`);
//       console.error(`Error reading JSON file!`);
//       return null;
//     }
//   }
  
//   // Specify the path to your JSON file
//   const jsonFilePath = './data.json';
  
//   // Read JSON data from the file
//   export const homeData: AppDataType | null = readJsonFile(jsonFilePath);
  
  // Check 