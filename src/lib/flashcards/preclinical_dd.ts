export interface Statement {
    text: string;
    isTrue: boolean;
}

export interface Question {
    id: number;
    question: string;
    statements: Statement[];
}

export const questions: Question[] = [
    {
        id: 1,
        question: "Which statements about nonclinical safety studies are true?",
        statements: [
            { text: "Non-compulsory by authorities", isTrue: false },
            { text: "Unrelated to clinical trials", isTrue: false },
            { text: "Able to assess potential unwanted effect of drug candidates", isTrue: true },
        ],
    },
    {
        id: 2,
        question: "Phase I of clinical trials includes patients?",
        statements: [
            { text: "True", isTrue: true },
            { text: "False", isTrue: false },
        ],
    },
    {
        id: 3,
        question: "Size of the compound of interest affects testing strategy?",
        statements: [
            { text: "True", isTrue: true },
            { text: "False", isTrue: false },
        ],
    },
    {
        id: 4,
        question: "Off-target toxicities are common in…",
        statements: [
            { text: "Toxicity studies of biologics", isTrue: false },
            { text: "Toxicity studies of NCEs", isTrue: true },
        ],
    },
    {
        id: 5,
        question: "Immunogenicity to a human product in animals is predicting for immunogenicity in humans?",
        statements: [
            { text: "True", isTrue: false },
            { text: "False", isTrue: true },
        ],
    },
    {
        id: 6,
        question: "Which species are relevant to be used for toxicity studies?",
        statements: [
            { text: "The cheapest ones", isTrue: false },
            { text: "One which the test material is pharmacologically active", isTrue: true },
            { text: "The easiest to handle", isTrue: false },
        ],
    },
    {
        id: 7,
        question: "For setting the dose in FHD studies, clinical safety data is evaluated for each step",
        statements: [
            { text: "True", isTrue: true },
            { text: "False", isTrue: false },
        ],
    },
    {
        id: 8,
        question: "Principles for determining the clinical dose do NOT include",
        statements: [
            { text: "NOAL based results", isTrue: false },
            { text: "Company's end goal for the dose", isTrue: true },
            { text: "PK/PD based results", isTrue: false },
        ],
    },
    {
        id: 9,
        question: "Which of these is NOT a strategy to enter FHD trials",
        statements: [
            { text: "MABEL", isTrue: false },
            { text: "TEM", isTrue: true },
            { text: "NOAEL", isTrue: false },
            { text: "PAD", isTrue: false },
        ],
    },
    {
        id: 10,
        question: "What test can be carried out to evaluate immunotoxicology endpoints?",
        statements: [
            { text: "Western blot for metabolic enzyme activity", isTrue: false },
            { text: "Electrochemical impedance spectroscopy of skin tissue", isTrue: false },
            { text: "Cytokine measurements in vivo", isTrue: true },
        ],
    },
    {
        id: 11,
        question: "Why are rabbits the preferred selected species for reprotoxicity studies?",
        statements: [
            { text: "Shortest reproductive cycle among animals", isTrue: false },
            { text: "Higher numbers of dams and offspring", isTrue: true },
            { text: "Reproductive organs are most similar to humans", isTrue: false },
        ],
    },
    {
        id: 12,
        question: "What is permeability?",
        statements: [
            { text: "The movement of a drug into the bloodstream", isTrue: false },
            { text: "The same as absorption", isTrue: false },
            { text: "The ability of drug substance to transport across the GI membrane", isTrue: true },
            { text: "The ability of a drug to into solution", isTrue: false },
        ],
    },
    {
        id: 13,
        question: "Drug absorption is the movement of a drug into the stomach",
        statements: [
            { text: "True", isTrue: false },
            { text: "False", isTrue: true },
        ],
    },
    {
        id: 14,
        question: "Undissolved drug contributes to absorption",
        statements: [
            { text: "True", isTrue: false },
            { text: "False", isTrue: true },
        ],
    },
    {
        id: 15,
        question: "What drives drug absorption?",
        statements: [
            { text: "Patient demographics", isTrue: false },
            { text: "Concentration gradient between intestine and blood", isTrue: true },
            { text: "Blood pressure", isTrue: false },
            { text: "The blood volume", isTrue: false },
        ],
    },
    {
        id: 16,
        question: "What can you NOT use PAMPA for?",
        statements: [
            { text: "Fast and easy", isTrue: false },
            { text: "Standardized and few variabilities", isTrue: false },
            { text: "Simulating in vivo accurately", isTrue: true },
            { text: "Cheap", isTrue: false },
        ],
    },
    {
        id: 17,
        question: "Which law describes flux?",
        statements: [
            { text: "Stokes-Einstein equation", isTrue: false },
            { text: "Fick's first law", isTrue: true },
            { text: "Arrhenius Equation", isTrue: false },
        ],
    },
    {
        id: 18,
        question: "What are the advantages with tissue models for studying permeability?",
        statements: [
            { text: "Cheap and fast", isTrue: false },
            { text: "No variability between tissue", isTrue: false },
            { text: "Very reproducible", isTrue: false },
            { text: "Somehow close to the in vivo situation", isTrue: true },
        ],
    },
    {
        id: 19,
        question: "What is FALSE for the closed loop perfusion technique",
        statements: [
            { text: "Cheap and fast", isTrue: true },
            { text: "Mechanistic understanding", isTrue: false },
            { text: "Intact mucus layer", isTrue: false },
            { text: "Blood flow and motility of the intestine", isTrue: false },
        ],
    },
    {
        id: 20,
        question: "Physiological barriers for oral drug delivery do NOT include",
        statements: [
            { text: "Biochemical agents in the stomach and intestine lumen", isTrue: false },
            { text: "Mucus layer lining the whole GI tract", isTrue: false },
            { text: "The circulatory system", isTrue: true },
            { text: "The epithelium", isTrue: false },
        ],
    },
    {
        id: 21,
        question: "Major cellular components in the small intestinal epithelium include",
        statements: [
            { text: "Enterocytes", isTrue: true },
            { text: "Goblet cells", isTrue: true },
            { text: "Microfold cells (M-cells)", isTrue: true },
            { text: "TR146", isTrue: false },
        ],
    },
    {
        id: 22,
        question: "Caco-2 cells have been considered 'gold-standard' assay to predict intestinal absorption, due to their ability of",
        statements: [
            { text: "Proliferation", isTrue: false },
            { text: "Pluripotent differentiation", isTrue: false },
            { text: "Mimicking size of the intestinal epithelial cells", isTrue: false },
            { text: "Forming cell layers with functional tight junctions", isTrue: true },
        ],
    },
    {
        id: 23,
        question: "HT29-MTX is a cell line typically used for mimicking goblet cells in secreting gel-forming mucins",
        statements: [
            { text: "True", isTrue: true },
            { text: "False", isTrue: false },
        ],
    },
    {
        id: 24,
        question: "In a transwell plate based cell model, cells can only be seeded in the apical side while the bottom chamber should leave blank",
        statements: [
            { text: "True", isTrue: false },
            { text: "False", isTrue: true },
        ],
    },
    {
        id: 25,
        question: "TEER value measurement is a useful approach for investigating barrier integrity of in vitro epithelium models. Here, TEER is an abbreviation for:",
        statements: [
            { text: "Trans-Endothelial Efficient Resistance", isTrue: false },
            { text: "Trans-endothelial Electrical Resistance", isTrue: false },
            { text: "Trans-Epithelial Efficient Resistance", isTrue: false },
            { text: "Trans-Epithelial Electrical Resistance", isTrue: true },
        ],
    },
    {
        id: 26,
        question: "Which of the following in vitro model can better provide mimicry of the 3D villi-like structure?",
        statements: [
            { text: "Caco-2 cells on 96 well plate", isTrue: false },
            { text: "Caco-2 cells on transwell plate", isTrue: false },
            { text: "Gut-on-a-chip", isTrue: true },
            { text: "Co-culture of Caco-2 and HT29-MTX cells on transwell plate", isTrue: false },
        ],
    },
    {
        id: 27,
        question: "Unlike transwell plate model, a gut-on-a-chip model is SPECIAL because it provides",
        statements: [
            { text: "Intestinal epithelial chamber", isTrue: false },
            { text: "Vascular endothelial chamber", isTrue: false },
            { text: "Dynamic flow", isTrue: true },
            { text: "Porous membrane", isTrue: false },
        ],
    },
    {
        id: 28,
        question: "Toxicology is the study of",
        statements: [
            { text: "Efficacy", isTrue: false },
            { text: "Pharmacodynamics", isTrue: false },
            { text: "Adverse effects of chemical, physical or biological agents", isTrue: true },
            { text: "Permeability and absorption", isTrue: false },
        ],
    },
    {
        id: 29,
        question: "Which key factor(s) can, among others, determine a toxic effect?",
        statements: [
            { text: "Only the route of administration", isTrue: false },
            { text: "Compound, concentration and duration", isTrue: true },
            { text: "No one knows", isTrue: false },
            { text: "Gender and age", isTrue: false },
        ],
    },
    {
        id: 30,
        question: "Toxicodynamics can be divided into local and systemic effects",
        statements: [
            { text: "Yes", isTrue: true },
            { text: "No", isTrue: false },
        ],
    },
    {
        id: 31,
        question: "Genotoxicity describes",
        statements: [
            { text: "Acute or chronic liver injury due to drug compounds", isTrue: false },
            { text: "Effect on an agent that interacts with DNA", isTrue: true },
            { text: "Heart damage arising from therapies", isTrue: false },
            { text: "How the body handles a chemical, as a function of dose and time", isTrue: false },
        ],
    },
    {
        id: 32,
        question: "Micronucleus test can only be performed in vitro",
        statements: [
            { text: "True", isTrue: false },
            { text: "False", isTrue: true },
        ],
    },
    {
        id: 33,
        question: "The difference in doses between NOAEL (no observed adverse effect level) in animals and the expected clinical dose in humans is called",
        statements: [
            { text: "The margin of safety", isTrue: true },
            { text: "The therapeutic index", isTrue: false },
            { text: "MABEL", isTrue: false },
            { text: "The optimal dose", isTrue: false },
        ],
    },
    {
        id: 34,
        question: "What sub-types of toxicities cannot be directly investigated in vitro?",
        statements: [
            { text: "Cardiotoxicity", isTrue: false },
            { text: "Hepatotoxicity", isTrue: false },
            { text: "Embryotoxicity", isTrue: true },
            { text: "Genotoxicity", isTrue: false },
        ],
    },
    {
        id: 35,
        question: "What can be the advantages with in vitro toxicology studies?",
        statements: [
            { text: "Always good correlation to in vivo", isTrue: false },
            { text: "Cheap, simple and high throughput", isTrue: true },
            { text: "No advantages", isTrue: false },
            { text: "It's possible to observe systemic effects", isTrue: false },
        ],
    },
    {
        id: 36,
        question: "The Ames test is used for studying?",
        statements: [
            { text: "Cardiotoxicity", isTrue: false },
            { text: "It's not really a used test", isTrue: false },
            { text: "Hepatotoxicity", isTrue: false },
            { text: "In vitro mutagenicity", isTrue: true },
        ],
    },
    {
        id: 37,
        question: "Cardiotoxicity is not a very crucial parameter in safety assessment",
        statements: [
            { text: "True", isTrue: false },
            { text: "False", isTrue: true },
        ],
    },
    {
        id: 38,
        question: "Higher tier assays DON'T lead to …",
        statements: [
            { text: "Increased complexity", isTrue: false },
            { text: "Decreased resources", isTrue: true },
            { text: "Increased translational value", isTrue: false },
        ],
    },
    {
        id: 39,
        question: "Which method is a part of 'New Approach Methodologies' (NAMs)",
        statements: [
            { text: "In silico methods", isTrue: true },
            { text: "Dissolution methods", isTrue: false },
            { text: "Raman-based methods", isTrue: false },
            { text: "Franz diffusion cell", isTrue: false },
        ],
    },
    {
        id: 40,
        question: "What is a part of exploratory toxicology?",
        statements: [
            { text: "The absorption kinetics", isTrue: false },
            { text: "Dose-range finding", isTrue: true },
            { text: "Drug-drug interactions", isTrue: false },
            { text: "The solubility of the drug compounds", isTrue: false },
        ],
    },
    {
        id: 41,
        question: "Which principle is very important for animal experiments?",
        statements: [
            { text: "The 3 A's", isTrue: false },
            { text: "The 3 B's", isTrue: false },
            { text: "The 3 R's", isTrue: true },
        ],
    },
    {
        id: 42,
        question: "What does the 3 R's stand for?",
        statements: [
            { text: "Replace, replace, replace", isTrue: false },
            { text: "Replace, reduce, refine", isTrue: true },
            { text: "Replace rodents and rats", isTrue: false },
        ],
    },
    {
        id: 43,
        question: "Animal experiments is a highly regulated area",
        statements: [
            { text: "True", isTrue: true },
            { text: "False", isTrue: false },
        ],
    },
    {
        id: 44,
        question: "Once you have an animal license, you can use all species?",
        statements: [
            { text: "True", isTrue: false },
            { text: "False", isTrue: true },
        ],
    },
    {
        id: 45,
        question: "Which animals can be used for in vivo experiments?",
        statements: [
            { text: "Only rodents", isTrue: false },
            { text: "Depends on the study", isTrue: true },
            { text: "Only primates", isTrue: false },
            { text: "Only pigs", isTrue: false },
        ],
    },
    {
        id: 46,
        question: "Which parameters are interesting in PK studies?",
        statements: [
            { text: "Absorption and bioavailability", isTrue: false },
            { text: "Route of administration", isTrue: false },
            { text: "All of them", isTrue: true },
            { text: "CL", isTrue: false },
        ],
    },
    {
        id: 47,
        question: "Blood volume is a problem in",
        statements: [
            { text: "Rats", isTrue: false },
            { text: "Mice", isTrue: true },
            { text: "Mini pig", isTrue: false },
        ],
    },
    {
        id: 48,
        question: "The best clinical species for dermal PK studies is",
        statements: [
            { text: "Mini pig", isTrue: true },
            { text: "Dog", isTrue: false },
            { text: "Rat", isTrue: false },
        ],
    },
    {
        id: 49,
        question: "MAD (Maximum Absorbable Dose) is dependent on the volume of GI fluid",
        statements: [
            { text: "True", isTrue: true },
            { text: "False", isTrue: false },
        ],
    },
    {
        id: 50,
        question: "Which animal allows for the maximum value of blood to be drawn within 24 hours?",
        statements: [
            { text: "Dog", isTrue: true },
            { text: "Rat", isTrue: false },
            { text: "Monkey", isTrue: false },
            { text: "Mini-pig", isTrue: false },
        ],
    },
    {
        id: 51,
        question: "What is the working principle of the CT",
        statements: [
            { text: "Two photons are detected from the camera", isTrue: false },
            { text: "X-ray source that rotates around the patient", isTrue: true },
            { text: "Radiation detectors detect gamma-ray photons", isTrue: false },
            { text: "Excited protons in a magnetic field", isTrue: false },
        ],
    },
    {
        id: 52,
        question: "What makes a CT imaging capable of creating 3D representations of the body?",
        statements: [
            { text: "The X-ray beams rotate to scan the body from multiple angles", isTrue: true },
            { text: "The bed remains stationary during the entire procedure", isTrue: false },
            { text: "The software automatically generates a 3D image without stacking slice", isTrue: false },
        ],
    },
    {
        id: 53,
        question: "A PET scan requires the use of a radiotracer for the imaging",
        statements: [
            { text: "True", isTrue: true },
            { text: "False", isTrue: false },
        ],
    },
    {
        id: 54,
        question: "Which one(s) of this statements is/are true for SPECT?",
        statements: [
            { text: "It has two or more detectors", isTrue: false },
            { text: "The radioisotope decays by gamma emission", isTrue: true },
            { text: "It uses x-rays", isTrue: false },
        ],
    },
    {
        id: 55,
        question: "Which of these is/are characteristic(s) of MRI imaging?",
        statements: [
            { text: "High spatial resolution", isTrue: true },
            { text: "Uses radiation", isTrue: false },
            { text: "Excellent contrast of soft tissue", isTrue: true },
            { text: "Long image acquisition time", isTrue: true },
        ],
    },
    {
        id: 56,
        question: "MRI imaging CANNOT be used for ECV (extracellular volume fraction) mapping?",
        statements: [
            { text: "True", isTrue: false },
            { text: "False", isTrue: true },
        ],
    },
    {
        id: 57,
        question: "What is a key characteristic of ultrasound imaging?",
        statements: [
            { text: "It uses radiation to generate images of internal structures", isTrue: false },
            { text: "It is primarily invasive and requires surgical procedures", isTrue: false },
            { text: "Ultrasound waves are produced and detected by a transducer", isTrue: true },
            { text: "It is best known for its use in x-ray imaging", isTrue: false },
        ],
    },
    {
        id: 58,
        question: "Regulatory affairs do not interfere with drug development process",
        statements: [
            { text: "True", isTrue: false },
            { text: "False", isTrue: true },
        ],
    },
    {
        id: 59,
        question: "With a marketing authorization, you are allowed to …",
        statements: [
            { text: "Do clinical studies", isTrue: false },
            { text: "Sell a drug", isTrue: true },
            { text: "Sell a drug but only by prescription", isTrue: false },
        ],
    },
    {
        id: 60,
        question: "Which guidelines drives the preclinical and clinical processes",
        statements: [
            { text: "QSEM guidelines", isTrue: false },
            { text: "TEM guidelines", isTrue: false },
            { text: "There are no guidelines", isTrue: false },
            { text: "ICH guidelines", isTrue: true },
        ],
    },
    {
        id: 61,
        question: "The target product profile drives the drug development and clinical trial designs",
        statements: [
            { text: "True", isTrue: true },
            { text: "False", isTrue: false },
        ],
    },
    {
        id: 62,
        question: "Developing a regulatory dossier is …",
        statements: [
            { text: "Done by people with different backgrounds", isTrue: true },
            { text: "Done only by lawyers", isTrue: false },
            { text: "Done only by researchers", isTrue: false },
        ],
    },
    {
        id: 63,
        question: "In EU, there is a centralized procedure for approval of drug products",
        statements: [
            { text: "Yes", isTrue: true },
            { text: "No", isTrue: false },
        ],
    },
    {
        id: 64,
        question: "What are some of the factors you need to evaluate in a 'benefit/risk balance'",
        statements: [
            { text: "How much money I can earn", isTrue: false },
            { text: "Can this be an 'over the counter drug'", isTrue: false },
            { text: "Unmet medical needs, safety and effectiveness", isTrue: true },
        ],
    },
    {
        id: 65,
        question: "No further procedures are required once the drug is on the market",
        statements: [
            { text: "True", isTrue: false },
            { text: "False", isTrue: true },
        ],
    },
    {
        id: 66,
        question: "Pharmacokinetics (PK) describes the drugs interaction with the body, and can give information on the following except",
        statements: [
            { text: "Absorption", isTrue: false },
            { text: "Receptor binding", isTrue: true },
            { text: "Distribution", isTrue: false },
            { text: "Metabolism", isTrue: false },
            { text: "Excretion", isTrue: false },
        ],
    },
    {
        id: 67,
        question: "PBPK is abbreviation of",
        statements: [
            { text: "Physically based pharmacokinetics", isTrue: false },
            { text: "Physiologically based pharmacology", isTrue: false },
            { text: "Physiologically based pharmacokinetics", isTrue: true },
            { text: "Physically based pharmacodynamics", isTrue: false },
        ],
    },
    {
        id: 68,
        question: "PBPK CANNOT be used for",
        statements: [
            { text: "Prediction of plasma profile in first-in-man studies", isTrue: false },
            { text: "Prediction of drug-drug interaction", isTrue: false },
            { text: "Guiding drug design", isTrue: false },
            { text: "Prediction of patient complaints", isTrue: true },
        ],
    },
    {
        id: 69,
        question: "PBPK can also be used for guiding formulation development",
        statements: [
            { text: "True", isTrue: true },
            { text: "False", isTrue: false },
        ],
    },
    {
        id: 70,
        question: "Allometric scaling is to predict a drug's dose for human from preclinical species, based on",
        statements: [
            { text: "Animal's age", isTrue: false },
            { text: "Animal's diet", isTrue: false },
            { text: "Body weight or body surface area", isTrue: true },
            { text: "The color of animal's fur", isTrue: false },
        ],
    },
    {
        id: 71,
        question: "Advancement in PBPK has led to increasing acceptance by academic, industrial and regulatory authorities",
        statements: [
            { text: "True", isTrue: true },
            { text: "False", isTrue: false },
        ],
    },
    {
        id: 72,
        question: "PBPK is a mathematical model that can predict e.g. plasma concentration time profile without prior knowledge, so it can stand alone",
        statements: [
            { text: "True", isTrue: false },
            { text: "False", isTrue: true },
        ],
    },
    {
        id: 73,
        question: "Which of the following is NOT considered as API and product formulation inputs for PBPK modelling?",
        statements: [
            { text: "Solubility vs. pH profiling", isTrue: false },
            { text: "Dose and dose volume", isTrue: false },
            { text: "Diffusion coefficient", isTrue: false },
            { text: "Color", isTrue: true },
            { text: "Permeability", isTrue: false },
        ],
    },
    {
        id: 74,
        question: "Which of the following is NOT considered as outputs from PBPK modelling?",
        statements: [
            { text: "Intracellular location of drug molecules", isTrue: true },
            { text: "PK profiles", isTrue: false },
            { text: "Cmax", isTrue: false },
            { text: "Tmax", isTrue: false },
        ],
    },
    {
        id: 75,
        question: "In solubility modelling, solubilization by bile is measured in Fasted/Fed state simulated intestinal fluid",
        statements: [
            { text: "True", isTrue: true },
            { text: "False", isTrue: false },
        ],
    },
    {
        id: 76,
        question: "Permeability modelling based on in vitro cell-free Papp includes information of compound's active transport",
        statements: [
            { text: "True", isTrue: false },
            { text: "False", isTrue: true },
        ],
    },
    {
        id: 77,
        question: "In vitro cell line Papp varies among different labs",
        statements: [
            { text: "True", isTrue: true },
            { text: "False", isTrue: false },
        ],
    },
    {
        id: 78,
        question: "The drug development process is",
        statements: [
            { text: "Easy with a few steps", isTrue: false },
            { text: "Linear and short", isTrue: false },
            { text: "Complex and lengthy", isTrue: true },
            { text: "Always different from time to time", isTrue: false },
        ],
    },
    {
        id: 79,
        question: "The drug development process requires",
        statements: [
            { text: "Not that much", isTrue: false },
            { text: "Not any collaboration", isTrue: false },
            { text: "2 weeks of hard work", isTrue: false },
            { text: "Inter-disciplinary collaborative effort", isTrue: true },
        ],
    },
    {
        id: 80,
        question: "The drug development process requires demonstration of",
        statements: [
            { text: "Animal and human efficacy and safety", isTrue: true },
            { text: "Human safety", isTrue: false },
            { text: "Animal efficacy", isTrue: false },
            { text: "Only computer-based data", isTrue: false },
        ],
    },
    {
        id: 81,
        question: "The risk of drug failure is highest during",
        statements: [
            { text: "Discovery/preclinical development", isTrue: true },
            { text: "Clinical phase I", isTrue: false },
            { text: "Clinical phase II", isTrue: false },
            { text: "Clinical phase III", isTrue: false },
        ],
    },
    {
        id: 82,
        question: "What is the overall success rate for getting a drug through to approval",
        statements: [
            { text: "0.001%", isTrue: false },
            { text: "1.6%", isTrue: true },
            { text: "8.9%", isTrue: false },
            { text: "16.2%", isTrue: false },
        ],
    },
    {
        id: 83,
        question: "What are the major reasons for attrition in drug development",
        statements: [
            { text: "Cost for the company", isTrue: false },
            { text: "Pharmacokinetics", isTrue: false },
            { text: "Efficacy", isTrue: false },
            { text: "Toxicology and clinical safety data", isTrue: true },
        ],
    },
    {
        id: 84,
        question: "Preclinical and clinical testing is regulated from",
        statements: [
            { text: "EMA", isTrue: false },
            { text: "OECD", isTrue: false },
            { text: "The Danish Drug Agency", isTrue: false },
            { text: "ICH guidelines", isTrue: true },
        ],
    },
    {
        id: 85,
        question: "Who are involved in the drug development phase",
        statements: [
            { text: "The hospital", isTrue: false },
            { text: "The pharmacy", isTrue: false },
            { text: "European union", isTrue: false },
            { text: "Regulatory authorities", isTrue: true },
        ],
    },
    {
        id: 86,
        question: "What is ADME an abbreviation for",
        statements: [
            { text: "Adhere Mose hEre", isTrue: false },
            { text: "It is not a known abbreviation", isTrue: false },
            { text: "All did metabolize and eliminate", isTrue: false },
            { text: "Absorption, Distribution, Metabolism, and Elimination", isTrue: true },
        ],
    },
    {
        id: 87,
        question: "What is needed to enter Phase I clinical trials?",
        statements: [
            { text: "Only dissolution studies", isTrue: false },
            { text: "Only cell studies", isTrue: false },
            { text: "Pharmacology (in vitro/in vivo), safety pharmacology, animal PK", isTrue: true },
            { text: "Only computer based modelling", isTrue: false },
        ],
    },
    {
        id: 88,
        question: "What is the investigator's brochure?",
        statements: [
            { text: "Study of the pre-screening of drugs", isTrue: false },
            { text: "Brochure on pre-clinical data", isTrue: false },
            { text: "Compilation of the clinical and non-clinical data", isTrue: true },
            { text: "Collection of safety data", isTrue: true },
        ],
    },
    {
        id: 89,
        question: "What is essential to find out as early as possible",
        statements: [
            { text: "How much money the company can earn on this drug", isTrue: false },
            { text: "Which side effect the drug has", isTrue: false },
            { text: "The therapeutic range / the right dose", isTrue: true },
            { text: "How can the table be produced", isTrue: false },
        ],
    },
    {
        id: 90,
        question: "What is MABEL an abbreviation for?",
        statements: [
            { text: "The Minimum Active Bio Elimination", isTrue: false },
            { text: "The Minimum Anticipated Biological Effect Level", isTrue: true },
            { text: "It's not a known abbreviation", isTrue: false },
            { text: "The Maximum Anticipated Biological Effect Level", isTrue: false },
        ],
    },
    {
        id: 91,
        question: "What is NOAEL an abbreviation for",
        statements: [
            { text: "No Observed Adverse Effect Level", isTrue: true },
            { text: "It's not a known abbreviation", isTrue: false },
            { text: "NO Absorption and Elimination", isTrue: false },
            { text: "Numbers of Adverse Event Levels", isTrue: false },
        ],
    },
    {
        id: 92,
        question: "What is one of the main purposes of the CMC phase?",
        statements: [
            { text: "Process development and scale-up", isTrue: true },
            { text: "Toxicology screening", isTrue: false },
            { text: "Animal testing", isTrue: false },
            { text: "First trials in humans", isTrue: false },
        ],
    },
    {
        id: 93,
        question: "What is one of the benefits of market access?",
        statements: [
            { text: "Improved health outcome", isTrue: true },
            { text: "The company earns more", isTrue: false },
            { text: "No benefits", isTrue: false },
        ],
    },
    {
        id: 94,
        question: "Drug discovery is the process by which",
        statements: [
            { text: "Bring a new drug to the market", isTrue: false },
            { text: "New drugs are discovered", isTrue: true },
            { text: "New drugs are tested in animals", isTrue: false },
            { text: "Clinical trials are performed", isTrue: false },
        ],
    },
    {
        id: 95,
        question: "Which of the followings is NOT included in Drug Discovery",
        statements: [
            { text: "Hits", isTrue: false },
            { text: "Leads", isTrue: false },
            { text: "Drug candidate", isTrue: false },
            { text: "Customer feedback", isTrue: true },
        ],
    },
    {
        id: 96,
        question: "Small molecule drugs include",
        statements: [
            { text: "Antibodies", isTrue: false },
            { text: "Organic molecule (<900 Daltons)", isTrue: true },
            { text: "RNA", isTrue: false },
            { text: "Peptide", isTrue: false },
        ],
    },
    {
        id: 97,
        question: "Cells/microbiomes are NOT considered as drug modalities",
        statements: [
            { text: "Correct", isTrue: false },
            { text: "False", isTrue: true },
        ],
    },
    {
        id: 98,
        question: "Which of the followings are often NOT the features of Small Molecule Drugs",
        statements: [
            { text: "Oral bioavailable and cell-permeable", isTrue: false },
            { text: "High stability", isTrue: false },
            { text: "High solubility", isTrue: true },
            { text: "Easier/cheaper to synthesize/produce", isTrue: false },
        ],
    },
    {
        id: 99,
        question: "During Hit generation, orthogonal assay is to",
        statements: [
            { text: "Generate primary hits", isTrue: false },
            { text: "Validate hits", isTrue: true },
            { text: "Get more functional information", isTrue: false },
            { text: "Test against targets you don't want activity against", isTrue: false },
        ],
    },
    {
        id: 100,
        question: "Hit-to-lead (H2L) is a process of finding a lead that has sufficient properties for obtaining proof-of-concept data in:",
        statements: [
            { text: "In vitro cell model", isTrue: false },
            { text: "Animal disease model", isTrue: true },
            { text: "Clinical trials", isTrue: false },
        ],
    },
    {
        id: 101,
        question: "LO is abbreviation for",
        statements: [
            { text: "Lead observation", isTrue: false },
            { text: "Lead optimization", isTrue: true },
            { text: "Lead organization", isTrue: false },
        ],
    },
    {
        id: 102,
        question: "During lead optimization, lipophilicity of drugs is important for the following features, except",
        statements: [
            { text: "Affinity", isTrue: false },
            { text: "Taste and color", isTrue: true },
            { text: "Selectivity", isTrue: false },
            { text: "Bioavailability", isTrue: false },
            { text: "Safety", isTrue: false },
        ],
    },
    {
        id: 103,
        question: "Fragment-based drug discovery (FBDD) is suitable for screening compounds of MW < 300 Da",
        statements: [
            { text: "False", isTrue: false },
            { text: "True", isTrue: true },
        ],
    },
    {
        id: 104,
        question: "Which of the following is NOT the feature of FBDD?",
        statements: [
            { text: "Start small, ligand-efficient, and stay efficient", isTrue: false },
            { text: "High hit-rate", isTrue: false },
            { text: "Low affinity", isTrue: false },
            { text: "Compound often get too big and lipophilic", isTrue: true },
        ],
    },
    {
        id: 105,
        question: "Which of the following is NOT a commonly-used technique for drug screening?",
        statements: [
            { text: "Surface plasmon resonance (SPR)", isTrue: false },
            { text: "Fluorescence polarization (FP)", isTrue: false },
            { text: "X-ray crystallography", isTrue: false },
            { text: "Electron microscopy", isTrue: true },
        ],
    },
    {
        id: 106,
        question: "Features of the SPR method do NOT include",
        statements: [
            { text: "High sensitive", isTrue: false },
            { text: "Automated", isTrue: false },
            { text: "High protein consumption", isTrue: true },
            { text: "Expensive maintenance", isTrue: false },
        ],
    },
    {
        id: 107,
        question: "What is/are the main challenge(s) in oral drug delivery (from a formulation POV)",
        statements: [
            { text: "pKa", isTrue: false },
            { text: "LogP", isTrue: false },
            { text: "Molecular weight", isTrue: false },
            { text: "Solubility and permeability", isTrue: true },
        ],
    },
    {
        id: 108,
        question: "How many classes are the biopharmaceutical classification system divided into",
        statements: [
            { text: "2", isTrue: false },
            { text: "3", isTrue: false },
            { text: "4", isTrue: true },
            { text: "5", isTrue: false },
        ],
    },
    {
        id: 109,
        question: "Which properties are drugs categorized into in the BCS?",
        statements: [
            { text: "Solubility and permeability", isTrue: true },
            { text: "pKa and logP", isTrue: false },
            { text: "Molecular weight and solubility", isTrue: false },
            { text: "Molecular weight and permeability", isTrue: false },
        ],
    },
    {
        id: 110,
        question: "What are the main property of 'grease ball' and 'brickdust' molecules",
        statements: [
            { text: "Poorly soluble", isTrue: true },
            { text: "High soluble", isTrue: false },
            { text: "Poor permeability", isTrue: false },
            { text: "Large molecular weight", isTrue: false },
        ],
    },
    {
        id: 111,
        question: "You can improve the solubility of a compound by changing on an molecular, colloidal or particulate level",
        statements: [
            { text: "Yes", isTrue: true },
            { text: "No", isTrue: false },
        ],
    },
    {
        id: 112,
        question: "What is the goal of the developability phase",
        statements: [
            { text: "To go directly on the market with a compound", isTrue: false },
            { text: "Collect and summarize info from preclinical studies on formulation", isTrue: true },
            { text: "Assess risks associated with the table production", isTrue: false },
            { text: "Just to find the solubility of the compound", isTrue: false },
        ],
    },
    {
        id: 113,
        question: "What could the developability assessment consists of?",
        statements: [
            { text: "How to find a hit series", isTrue: false },
            { text: "Electron microscopy", isTrue: false },
            { text: "First trial in human", isTrue: false },
            { text: "Physicochemical and characterization", isTrue: true },
        ],
    },
    {
        id: 114,
        question: "The stability of a compound is an important factor. How can this be investigated?",
        statements: [
            { text: "Putting it on a shelf for 5 years and then check the stability", isTrue: false },
            { text: "Put the compound into water for 24 hours", isTrue: false },
            { text: "Put the compound into the fridge and freezer", isTrue: false },
            { text: "E.g. using heat, light, and various pH values", isTrue: true },
        ],
    },
    {
        id: 115,
        question: "What is the most convenient formulation for early formulations",
        statements: [
            { text: "Tablet", isTrue: false },
            { text: "Solution", isTrue: true },
            { text: "Suspension", isTrue: false },
            { text: "Capsule", isTrue: false },
        ],
    },
    {
        id: 116,
        question: "What is the goal for the biopharmaceutics phase",
        statements: [
            { text: "Increase product understanding", isTrue: true },
            { text: "Performing animal studies to obtain PK/PD", isTrue: false },
            { text: "Make an amorphous form of the drug", isTrue: false },
            { text: "Increase the aqueous solubility of the compound", isTrue: false },
        ],
    },
    {
        id: 117,
        question: "Which method can you use to determine solubility",
        statements: [
            { text: "Shake flask", isTrue: true },
            { text: "Electron microscopy", isTrue: false },
            { text: "In vivo studies", isTrue: false },
            { text: "Plate reader", isTrue: false },
        ],
    },
    {
        id: 118,
        question: "In the developability phase you have",
        statements: [
            { text: "One compound and few details", isTrue: false },
            { text: "One compound and many details", isTrue: false },
            { text: "Many compounds, low precision", isTrue: true },
            { text: "Many compounds, and much details", isTrue: false },
        ],
    },
    {
        id: 119,
        question: "In the biopharmaceutics phase you have",
        statements: [
            { text: "One compound and many details", isTrue: false },
            { text: "More detailed and in-depth knowledge compared to developability phase", isTrue: true },
            { text: "There is no biopharmaceutics phase", isTrue: false },
            { text: "Many compounds and much details", isTrue: false },
        ],
    },
    {
        id: 120,
        question: "Which BCS class has high solubility and low permeability",
        statements: [
            { text: "I", isTrue: false },
            { text: "II", isTrue: false },
            { text: "III", isTrue: true },
            { text: "IV", isTrue: false },
        ],
    },
    {
        id: 121,
        question: "Where are drugs usually absorbed",
        statements: [
            { text: "Small intestine", isTrue: true },
            { text: "Colon", isTrue: false },
            { text: "Stomach", isTrue: false },
            { text: "Not possible to determine", isTrue: false },
        ],
    },
    {
        id: 122,
        question: "What is the main function of the stomach",
        statements: [
            { text: "Drug absorption", isTrue: false },
            { text: "pH neutralizing", isTrue: false },
            { text: "Reservoir with mechanic and enzymatic digestion", isTrue: true },
            { text: "Adding water to food content", isTrue: false },
        ],
    },
    {
        id: 123,
        question: "What is the main function of the small intestine",
        statements: [
            { text: "Down regulating pH", isTrue: false },
            { text: "Transport of content", isTrue: false },
            { text: "Digestion, pH regulation and absorption", isTrue: true },
            { text: "Reservoir", isTrue: false },
        ],
    },
    {
        id: 124,
        question: "Why is the small intestine the primary site of nutrient and drug absorption",
        statements: [
            { text: "Small surface area", isTrue: false },
            { text: "Large surface area", isTrue: true },
            { text: "Large transit time", isTrue: false },
            { text: "It is not a good place for drug absorption", isTrue: false },
        ],
    },
    {
        id: 125,
        question: "Why do we use in vitro models",
        statements: [
            { text: "They are the only option", isTrue: false },
            { text: "Very good correlation with in vivo situation", isTrue: false },
            { text: "Simple, cheap, robust, no ethical concerns", isTrue: true },
            { text: "They can replace in vivo studies", isTrue: false },
        ],
    },
    {
        id: 126,
        question: "Temperature is important to consider when designing a dissolution experiment",
        statements: [
            { text: "True", isTrue: true },
            { text: "False", isTrue: false },
        ],
    },
    {
        id: 127,
        question: "Type of medium is important to consider when designing a dissolution experiment",
        statements: [
            { text: "True", isTrue: true },
            { text: "False", isTrue: false },
        ],
    },
    {
        id: 128,
        question: "Volume is important when designing a dissolution experiment",
        statements: [
            { text: "True", isTrue: true },
            { text: "False", isTrue: false },
        ],
    },
    {
        id: 129,
        question: "DDS properties do NOT need to be considered when designing a dissolution experiment",
        statements: [
            { text: "True", isTrue: false },
            { text: "False", isTrue: true },
        ],
    },
    {
        id: 130,
        question: "The pH-stat controlled lipolysis can mimic both digestion and absorption at the same time",
        statements: [
            { text: "True", isTrue: false },
            { text: "False", isTrue: true },
        ],
    },
    {
        id: 131,
        question: "Why do we use pharmacopoeial dissolution models",
        statements: [
            { text: "Simple, cheap, Robust", isTrue: true },
            { text: "Allow for absorption measurements", isTrue: false },
            { text: "Dynamic", isTrue: false },
            { text: "Mimic the physiological hydrodynamics", isTrue: false },
        ],
    },
    {
        id: 132,
        question: "Why do we use intestinal and gastric biorelevant media",
        statements: [
            { text: "To simulate physiological conditions in the gastrointestinal tract", isTrue: true },
            { text: "To mimic the chemical environment of the bloodstream", isTrue: false },
            { text: "To replicate the conditions in the liver for metabolism studies", isTrue: false },
            { text: "To study drug absorption directly in the skin for topical formulations", isTrue: false },
        ],
    },
    {
        id: 133,
        question: "Translational medicine is not a fixed process and can begin with either a basic laboratory finding or a clinical observation",
        statements: [
            { text: "True", isTrue: true },
            { text: "False", isTrue: false },
        ],
    },
    {
        id: 134,
        question: "The purpose of 'proof-of-concept' is to demonstrate",
        statements: [
            { text: "Drug binds to target", isTrue: false },
            { text: "Drug has direct pharmacological effect", isTrue: false },
            { text: "Drug impacts disease", isTrue: true },
            { text: "Drug produces a meaningful clinical change", isTrue: false },
        ],
    },
    {
        id: 135,
        question: "Outcomes of exploratory development determines whether the drug meets Minimal Acceptable Profile (MAP), which is a decision point at PoC",
        statements: [
            { text: "True", isTrue: true },
            { text: "False", isTrue: false },
        ],
    },
    {
        id: 136,
        question: "Clinical trials are research studies designed to answer specific questions about interventions to which target subject",
        statements: [
            { text: "Rodents", isTrue: false },
            { text: "Mini pig", isTrue: false },
            { text: "Human", isTrue: true },
            { text: "Human primary cells", isTrue: false },
        ],
    },
    {
        id: 137,
        question: "Bias in clinical trials do NOT include",
        statements: [
            { text: "Selection bias", isTrue: false },
            { text: "Repetition bias", isTrue: true },
            { text: "Performance bias", isTrue: false },
            { text: "Detection bias", isTrue: false },
            { text: "Reporting bias", isTrue: false },
        ],
    },
    {
        id: 138,
        question: "Blinding is used for reducing several types of bias in clinical trials except",
        statements: [
            { text: "Selection bias", isTrue: true },
            { text: "Performance bias", isTrue: false },
            { text: "Detection bias", isTrue: false },
            { text: "Reporting bias", isTrue: false },
        ],
    },
    {
        id: 139,
        question: "Selection bias can be reduced by randomization",
        statements: [
            { text: "True", isTrue: true },
            { text: "False", isTrue: false },
        ],
    },
    {
        id: 140,
        question: "Sample size in a clinical trials could be as big as possible",
        statements: [
            { text: "True", isTrue: false },
            { text: "False", isTrue: true },
        ],
    },
    {
        id: 141,
        question: "Inclusion of trial population is based on",
        statements: [
            { text: "Stage of development, safety profile, indication, and product profile", isTrue: true },
            { text: "Stage of development, safety profile, indication, and side effects", isTrue: false },
            { text: "Stage of development, safety profile, stability, and product profile", isTrue: false },
        ],
    },
    {
        id: 142,
        question: "The aim of including healthy volunteers is phase I population is to reduce variability and time",
        statements: [
            { text: "True", isTrue: true },
            { text: "False", isTrue: false },
        ],
    },
    {
        id: 143,
        question: "Pharmacokinetics-pharmacodynamics (PK-PD) describes the correlation of",
        statements: [
            { text: "Concentration vs. time", isTrue: false },
            { text: "Effect vs. concentrations", isTrue: false },
            { text: "Effect vs. time", isTrue: true },
        ],
    },
    {
        id: 144,
        question: "No observable adverse effect level (NOAEL) defines",
        statements: [
            { text: "Safety window based on toxicology", isTrue: true },
            { text: "Safety window based on pharmacology", isTrue: false },
        ],
    },
    {
        id: 145,
        question: "Minimum anticipated biological effect level (MABEL) defines",
        statements: [
            { text: "Safety window based on toxicology", isTrue: false },
            { text: "Safety window based on pharmacology", isTrue: true },
        ],
    },
    {
        id: 146,
        question: "Which phase of clinical trials is the most extensive and expensive testing of a drug",
        statements: [
            { text: "Phase I", isTrue: false },
            { text: "Phase II", isTrue: false },
            { text: "Phase III", isTrue: true },
        ],
    },
];