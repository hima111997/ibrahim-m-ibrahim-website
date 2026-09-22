"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { SectionHeader } from "./about";

type Pub = {
  year: number;
  title: string;
  authors: string;
  journal: string;
  doi: string;
};

const PUBLICATIONS: Pub[] = [
  {
    year: 2027,
    title: "Novel benzensulfonamide-linked oxadiazole-pyridine hybrids as dual acetylcholinesterase and butyrylcholinesterase inhibitors: Design, synthesis, biological evaluation and computational studies",
    authors: "Rasha M. Hassan, Mohammed S. Abdel-maksoud, Ibrahim M. Ibrahim, Marwa R. El-Garhy, Faten Farouk, Mohamed F. Hamissa, Dalal Z. Husein, Iman A.Y. Ghannam",
    journal: "Journal of Molecular Structure",
    doi: "10.1016/j.molstruc.2026.147362",
  },
  {
    year: 2026,
    title: "Design, Computational, Synthesis, and Anti-Cancer Evaluation of a Multifunctional 2,3-Dihydro-1,3,4-Thiadiazole-Benzenesulfonamide Hybrid as a Triple Inhibitor of CAIX, CAXII, and EGFR",
    authors: "Ibrahim H. Eissa, Hazem Elkady, Walid E. Elgammal, Hazem A. Mahdy, Dalal Z. Husein, Ibrahim M. Ibrahim, Rosine Abdullah, Aisha A. Alsfouk, Eslam B. Elkaeed, Ahmed M. Metwaly",
    journal: "Journal of Computational Biophysics and Chemistry",
    doi: "10.1142/S2737416526500225",
  },
  {
    year: 2026,
    title: "Design, synthesis, biological evaluation and computational studies of novel phthalimides as dual COX-2/5-LOX inhibitors",
    authors: "Rasha M. Hassan, Mohammed S. Abdel-Maksoud, May A. El-Manawaty, Ibrahim M. Ibrahim, Walaa H. Abd-Allah, Aida A. El-Azzouny, Mohamed N. Aboul-Enein",
    journal: "Molecular Diversity",
    doi: "10.1007/s11030-025-11431-z",
  },
  {
    year: 2026,
    title: "Identification of Apixaban as a Potential Inhibitor of the SARS-CoV-2 Main Protease: A Multistage Computational Study",
    authors: "Ahmed M. Metwaly, Bshra A. Alsfouk, Ibrahim M. Ibrahim, Eslam B. Elkaeed, Ibrahim H. Eissa",
    journal: "Journal of Chemistry",
    doi: "10.1155/joch/3651186",
  },
  {
    year: 2026,
    title: "Microbial pigments as potential anti-rift valley fever virus drugs",
    authors: "Faten Farouk, Ibrahim M. Ibrahim, Hassan M. E. Azzazy",
    journal: "BMC Chemistry",
    doi: "10.1186/s13065-025-01680-2",
  },
  {
    year: 2026,
    title: "Nisin and rutin as potential coating agents for iron oxide nanoparticles for enhanced theranostic applications against cancer",
    authors: "Omnia A. Saad, Abdo A. Elfiky, Mohamed M Fathy, Ibrahim M. Ibrahim, Mohamed A. Ibrahim, Ahmed M. Elgharib, Omnia A. Ali, Ahmed A. Ezat",
    journal: "Scientific Reports",
    doi: "10.1038/s41598-026-49686-7",
  },
  {
    year: 2026,
    title: "Rational design of a bis-acetanilide hydrazone–thiourea hybrid as a potent VEGFR-2 inhibitor: in silico and in vitro evaluations",
    authors: "Ahmed M. Metwaly, Ibrahim H. Eissa, Walid E. Elgammal, Hazem A. Mahdy, Dalal Z. Husein, Bshra A. Alsfouk, Ibrahim M. Ibrahim, Hazem Elkady, Eslam B. Elkaeed",
    journal: "Chemical Papers",
    doi: "10.1007/s11696-026-05481-2",
  },
  {
    year: 2026,
    title: "Thiadiazole-Derived VEGFR-2 Inhibitors: From Design to Anticancer Evaluation",
    authors: "Aisha A. Alsfouk, Eslam B. Elkaeed, Hazem Elkady, Walid E. Elgammal, Hazem A. Mahdy, Ahmed Nofal, Ibrahim H. Eissa, Dalal Z. Husein, Ibrahim M. Ibrahim, Mahmoud S. Elkotamy, Ahmed M. Metwaly",
    journal: "Chemical Biology and Drug Design",
    doi: "10.1111/cbdd.70280",
  },
  {
    year: 2026,
    title: "VEGFR-2-Targeted Semisynthetic Theobromine Derivative: A Computer-Aided Drug Design (CADD) Approach",
    authors: "Eslam B. Elkaeed, Reda G. Yousef, Hazem Elkady, Hanan A. Al-Ghulikah, Dalal Z. Husein, Ibrahim M. Ibrahim, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "Journal of Computational Biophysics and Chemistry",
    doi: "10.1142/S2737416525501273",
  },
  {
    year: 2025,
    title: "A novel thiadiazole-based dual inhibitor of carbonic anhydrase-IX and epidermal growth factor receptor targeting cancer: A combined in silico and in vitro approach",
    authors: "Eslam B Elkaeed, Hazem Elkady, Walid E Elgammal, Hazem A Mahdy, Dalal Z Husein, Ibrahim M Ibrahim, Hanan A Al-ghulikah, Ibrahim H Eissa, Ahmed M Metwaly",
    journal: "Journal of Chemical Research",
    doi: "10.1177/17475198251400403",
  },
  {
    year: 2025,
    title: "Aotaphenazine, a rare hydrophenazine, targets topoisomerase II with anticancer efficacy: In silico to in vitro evidence",
    authors: "Ahmed M. Metwaly, Ibrahim H. Eissa, Wael M. Afifi, Eslam B. Elkaeed, Aisha A. Alsfouk, Ibrahim M. Ibrahim, Mohamed S. Abdelfattah",
    journal: "PLOS ONE",
    doi: "10.1371/journal.pone.0338135",
  },
  {
    year: 2025,
    title: "Apoptotic Potential of Iloneoside from Gongronema latifolium Benth against Prostate Cancer Cells Using In Vitro and In Silico Approach",
    authors: "Gideon A. Gyebi, Saheed O. Afolabi, Oludare M. Ogunyemi, Ibrahim M. Ibrahim, Olufunke E. Olorundare, Joseph O. Adebayo, Mamoru Koketsu",
    journal: "Cell Biochemistry and Biophysics",
    doi: "10.1007/s12013-024-01507-2",
  },
  {
    year: 2025,
    title: "Cholinergic Inhibition and Antioxidant Potential of Gongronema latifolium Benth Leaf in Neurodegeneration: Experimental and In Silico Study",
    authors: "Gideon A. Gyebi, Joseph C. Ejoh, Oludare M. Ogunyemi, Saheed O. Afolabi, Ibrahim M. Ibrahim, Gabriel O. Anyanwu, Olufunke E. Olorundare, Joseph O. Adebayo, Mamoru Koketsu",
    journal: "Cell Biochemistry and Biophysics",
    doi: "10.1007/s12013-024-01467-7",
  },
  {
    year: 2025,
    title: "Computer-aided drug discovery of potential semisynthetic inhibitors for SARS-CoV-2 main protease: A multi-phase computational approach",
    authors: "Ahmed M Metwaly, Hazem Elkady, Eslam B Elkaeed, Abdelrahman M Saleh, Aisha A Alsfouk, Ibrahim M Ibrahim, Ibrahim H Eissa",
    journal: "Journal of Chemical Research",
    doi: "10.1177/17475198251367070",
  },
  {
    year: 2025,
    title: "Design and synthesis of novel cyclohexanecarboxamides with anticonvulsant effect by activating Nrf2-ARE pathway",
    authors: "Walaa H. Abd-Allah, Mohammed S. Abdel-Maksoud, Marawan A. Elbaset, Reda M.S. Korany, Ibrahim M. Ibrahim, Rasha M. Hassan",
    journal: "Bioorganic Chemistry",
    doi: "10.1016/j.bioorg.2025.108357",
  },
  {
    year: 2025,
    title: "Design, Synthesis, Biological Evaluation, and Computational Studies of Novel 1,4-Diketopiperazines as GABA Agonist",
    authors: "Mostafa Abd El-Mohsen Anwar, Eman R. Mohammed, Samir M. El Moghazy, Nesma M. E. Abo El Nasr, Marawan A. Elbaset, Reda M. S. korany, Omar Ahmed-Farid, Ibrahim M. Ibrahim, Walaa Hamada Abd-Allah",
    journal: "Drug Development Research",
    doi: "10.1002/ddr.70136",
  },
  {
    year: 2025,
    title: "Development of new anticancer thiadiazole-sulfonamides as dual EGFR/carbonic anhydrase inhibitors",
    authors: "Ibrahim H. Eissa, Hazem Elkady, Walid E. Elgammal, Hazem A. Mahdy, Hany S. Elshennawy, Dalal Z. Husein, Fatma G. Amin, Ibrahim M. Ibrahim, Bshra A. Alsfouk, Eslam B. Elkaeed, Ahmed M. Metwaly",
    journal: "Future Medicinal Chemistry",
    doi: "10.1080/17568919.2025.2498879",
  },
  {
    year: 2025,
    title: "Identification of promising dipeptidyl peptidase-4 and protein tyrosine phosphatase 1B inhibitors from selected terpenoids through molecular modeling",
    authors: "Oludare M. Ogunyemi, Gideon A. Gyebi, Femi Olawale, Ibrahim M. Ibrahim, Opeyemi Iwaloye, Modupe M. Fabusiwa, Stephen Omowaye, Omotade I. Oloyede, Charles O. Olaiya",
    journal: "Bioinformatics Advances",
    doi: "10.1093/bioadv/vbae205",
  },
  {
    year: 2025,
    title: "Inhibition of erectile dysfunction-related enzymes by ginger (Zingiber officinale)-derived compounds: molecular docking and dynamics studies",
    authors: "Ayodeji Osmund Falade, Kayode Ezekiel Adewole, Gideon Ampoma Gyebi, Ibrahim M. Ibrahim, Kolawole Ayodapo Olofinsan",
    journal: "Journal of Biomolecular Structure and Dynamics",
    doi: "10.1080/07391102.2025.2502153",
  },
  {
    year: 2025,
    title: "Integrated Computational and Experimental Discovery of a Promising Xanthine Derivative with Anticancer Potential Targeting EGFR",
    authors: "Eslam B. Elkaeed, Reda G. Yousef, Hazem Elkady, Hanan A. Al-ghulikah, Ibrahim M. Ibrahim, Omar A. Soliman, Dalal Z. Husein, Ahmed S. Doghish, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "Current Cancer Drug Targets",
    doi: "10.2174/0115680096363027250731042338",
  },
  {
    year: 2025,
    title: "Integrated in silico and in vitro exploration of the anti-VEGFR-2 activities of a semisynthetic xanthine alkaloid inhibiting breast cancer",
    authors: "Eslam B. Elkaeed, Hazem Elkady, Ahmed M. Khattab, Reda G. Yousef, Hanan A. Al-Ghulikah, Dalal Z. Husein, Ibrahim M. Ibrahim, Mohamed A. Elkady, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "PLoS ONE",
    doi: "10.1371/journal.pone.0316146",
  },
  {
    year: 2025,
    title: "Integrated in Silico and in Vitro Studies of Rutin's Potential against SARS-CoV-2 through the Inhibition of the RNA-dependent RNA Polymerase",
    authors: "Ahmed M. Metwaly, Esmail M. El-Fakharany, Aisha A. Alsfouk, Ibrahim M. Ibrahim, Eslam B. Elkaeed, Ibrahim H. Eissa",
    journal: "Current Medicinal Chemistry",
    doi: "10.2174/0109298673339634241210151734",
  },
  {
    year: 2025,
    title: "Investigating novel tubulin polymerization inhibitors: design, synthesis, LC/MS cellular permeability, in silico studies, and in vitro assessment",
    authors: "Iman A. Y. Ghannam, Islam H. Ali, Rasha Z. Batran, Mahmoud T. Abo-elfadl, Rasha M. Allam, Ibrahim M. Ibrahim, Faten Farouk",
    journal: "Medicinal Chemistry Research",
    doi: "10.1007/s00044-024-03327-8",
  },
  {
    year: 2025,
    title: "New nicotinamide derivatives as potential anticancer agents targeting VEGFR-2: design, synthesis, in vitro, and in silico studies",
    authors: "Reda G. Yousef, Ibrahim H. Eissa, Hazem Elkady, Wagdy M. Eldehna, Ahmed B. M. Mehany, Ahmed Nabeeh, Ibrahim M. Ibrahim, Alaa Elwan, Mohamed Ayman El-Zahabi",
    journal: "Journal of Biomolecular Structure and Dynamics",
    doi: "10.1080/07391102.2023.2294170",
  },
  {
    year: 2025,
    title: "QSAR-driven screening uncovers and designs novel pyrimidine-4,6-diamine derivatives as potent JAK3 inhibitors",
    authors: "Abdelmoujoud Faris, Ibrahim M. Ibrahim, Radwan Alnajjar, Hanine Hadni, Mashooq Ahmad Bhat, Muhammad Yaseen, Souvik Chakraborty, Nada Alsakhen, Israa M. Shamkh, Fazal Mabood, Ahmed M. Naglah, Ihsan Ullah, Noha Ziedan, Menana Elhallaoui",
    journal: "Journal of Biomolecular Structure and Dynamics",
    doi: "10.1080/07391102.2023.2283168",
  },
  {
    year: 2025,
    title: "Resistomycin as a DNA-targeted topoisomerase II inhibitor: Computational and mechanistic insights into its anticancer potential",
    authors: "Mohamed S Abdelfattah, Ibrahim H Eissa, Ahmad E Mostafa, Eslam B Elkaeed, Aisha A Alsfouk, Abdulla A Mahmoud, Ibrahim M Ibrahim, Ahmed M Metwaly",
    journal: "Journal of Chemical Research",
    doi: "10.1177/17475198251385678",
  },
  {
    year: 2025,
    title: "Understanding the association of cell-surface proteins (ACE2 and GRP78) facilitating pathogen recognition: a computational approach",
    authors: "Wael M. Elshemey, Ibrahim M. Ibrahim, Abdo A. Elfiky",
    journal: "Journal of Receptors and Signal Transduction",
    doi: "10.1080/10799893.2025.2502383",
  },
  {
    year: 2024,
    title: "A new anticancer derivative of the natural alkaloid, theobromine, as an EGFR inhibitor and apoptosis inducer",
    authors: "Ibrahim H. Eissa, Reda G.Yousef, Hazem Elkady, Eslam B. Elkaeed, Aisha A. Alsfouk, Dalal Z. Husein, Ibrahim M. Ibrahim, Mostafa A. Asmaey, Ahmed M. Metwaly",
    journal: "Theoretical Chemistry Accounts",
    doi: "10.1007/s00214-023-03071-z",
  },
  {
    year: 2024,
    title: "A structural-based virtual screening and in vitro validation reveals novel effective inhibitors for SARS-CoV-2 helicase and endoribonuclease",
    authors: "Ibrahim M. Ibrahim, Abdo A. Elfiky, Sara H. Mahmoud, Mahmoud ElHefnawi",
    journal: "Journal of Biomolecular Structure and Dynamics",
    doi: "10.1080/07391102.2023.2250479",
  },
  {
    year: 2024,
    title: "Anti-proliferative 2,3-dihydro-1,3,4-thiadiazoles targeting VEGFR-2: Design, synthesis, in vitro, and in silico studies",
    authors: "Hazem Elkady, Walid E. Elgammal, Hazem A. Mahdy, Susi Zara, Simone Carradori, Dalal Z. Husein, Aisha A. Alsfouk, Ibrahim M. Ibrahim, Eslam B. Elkaeed, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "Computational Biology and Chemistry",
    doi: "10.1016/j.compbiolchem.2024.108221",
  },
  {
    year: 2024,
    title: "Anti-virulence potential of patuletin, a natural flavone, against Staphylococcus aureus: In vitro and In silico investigations",
    authors: "Ahmed M. Metwaly, Moustafa M. Saleh, Bshra A. Alsfouk, Ibrahim M. Ibrahim, Muhamad Abd-Elraouf, Eslam B. Elkaeed, Ibrahim H. Eissa",
    journal: "Heliyon",
    doi: "10.1016/j.heliyon.2024.e24075",
  },
  {
    year: 2024,
    title: "Biological and computational assessment of new synthesized nicotinamides as potential immunomodulatory VEGFR-2 inhibitors",
    authors: "Reda G. Yousef, Alaa Elwan, Abdallah E. Abdallah, Hazem Elkady, Ahmed B.M. Mehany, Mariam Ali Abo-Saif, Mohamed M. Radwan, Mahmoud A. ElSohly, Ibrahim M. Ibrahim, Mohamed A. Elkady, Mohamed Ayman El-Zahabi, Ibrahim H. Eissa",
    journal: "Journal of Molecular Structure",
    doi: "10.1016/j.molstruc.2024.137753",
  },
  {
    year: 2024,
    title: "Comprehensive structural and functional analysis of Patuletin as a potent inhibitor of SARS-CoV-2 targeting the RNA-dependent RNA polymerases",
    authors: "Ahmed M. Metwaly, Esmail M El-Fakharany, Aisha A. Alsfouk, Ibrahim M. Ibrahim, Ahmad E. Mostafa, Eslam B. Elkaeed, Ibrahim H. Eissa",
    journal: "Journal of Molecular Structure",
    doi: "10.1016/j.molstruc.2024.138424",
  },
  {
    year: 2024,
    title: "Computer aided drug discovery (CADD) of a thieno[2,3-d]pyrimidine derivative as a new EGFR inhibitor targeting the ribose pocket",
    authors: "Eman A. Sobh, Mohammed A. Dahab, Eslam B. Elkaeed, Aisha A. Alsfouk, Ibrahim M. Ibrahim, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "Journal of Biomolecular Structure and Dynamics",
    doi: "10.1080/07391102.2023.2204500",
  },
  {
    year: 2024,
    title: "Computer-Assisted Drug Discovery of Potential African Anti-SARS-CoV-2 Natural Products Targeting the Helicase Protein",
    authors: "Ahmed M. Metwaly, Mohamed S. Alesawy, Bshra A. Alsfouk, Ibrahim M. Ibrahim, Eslam B. Elkaeed, Ibrahim H. Eissa",
    journal: "Natural Product Communications",
    doi: "10.1177/1934578X241246738",
  },
  {
    year: 2024,
    title: "Design and in Silico and in Vitro Evaluations of a Novel Nicotinamide Derivative as a VEGFR-2 Inhibitor",
    authors: "Ibrahim H. Eissa, Muhammad Abd Elgayed Bkrah, Reda G. Yousef, Hazem Elkady, Eslam B. Elkaeed, Bshra A. Alsfouk, Ibrahim M. Ibrahim, Ahmed M. Metwaly, Dalal Z. Husein",
    journal: "Journal of Chemistry",
    doi: "10.1155/2024/2176512",
  },
  {
    year: 2024,
    title: "Design and synthesis of new nicotinamides as immunomodulatory VEGFR-2 inhibitors and apoptosis inducers",
    authors: "Reda G Yousef, Ibrahim H Eissa, Hazem Elkady, Ahmed B M Mehany, Mariam Ali Abo-Saif, Mohamed M Radwan, Mahmoud A ElSohly, Ibrahim M Ibrahim, Alaa Elwan, Mohamed Ayman El-Zahabi",
    journal: "Future Medicinal Chemistry",
    doi: "10.1080/17568919.2024.2421150",
  },
  {
    year: 2024,
    title: "Design, synthesis, and evaluation of novel thiadiazole derivatives as potent VEGFR-2 inhibitors: a comprehensive in vitro and in silico study",
    authors: "Ibrahim H. Eissa, Walid E. Elgammal, Hazem A. Mahdy, Susi Zara, Simone Carradori, Dalal Z. Husein, Maymounah N. Alharthi, Ibrahim M. Ibrahim, Eslam B. Elkaeed, Hazem Elkady, Ahmed M. Metwaly",
    journal: "RSC Advances",
    doi: "10.1039/d4ra04158e",
  },
  {
    year: 2024,
    title: "Design, synthesis, in vitro, and in silico studies of new thiadiazol derivatives as promising VEGFR-2 inhibitors and apoptosis inducers",
    authors: "Hazem A. Mahdy, Hazem Elkady, Walid E. Elgammal, Eslam B. Elkaeed, Aisha A. Alsfouk, Ibrahim M. Ibrahim, Dalal Z. Husein, Mohamed A. Elkady, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "Journal of Molecular Structure",
    doi: "10.1016/j.molstruc.2024.139019",
  },
  {
    year: 2024,
    title: "Discovery of new thiazolidine-2,4-dione derivatives as potential VEGFR-2 inhibitors: In vitro and in silico studies",
    authors: "Ibrahim H. Eissa, Hazem Elkady, Mahmoud Rashed, Alaa Elwan, Mohamed Hagras, Mohammed A. Dahab, Mohammed S. Taghour, Ibrahim M. Ibrahim, Dalal Z. Husein, Eslam B. Elkaeed, Hanan A. Al-ghulikah, Ahmed M. Metwaly, Hazem A. Mahdy",
    journal: "Heliyon",
    doi: "10.1016/j.heliyon.2024.e24005",
  },
  {
    year: 2024,
    title: "Discovery of potential FDA-approved SARS-CoV-2 Papain-like protease inhibitors: A multi-phase in silico approach",
    authors: "Ahmed M Metwaly, Eslam B Elkaeed, Mohamed M Khalifa, Aisha A Alsfouk, Fatma G Amin, Ibrahim M Ibrahim, Ibrahim H Eissa",
    journal: "Journal of Chemical Research",
    doi: "10.1177/17475198241298547",
  },
  {
    year: 2024,
    title: "High-throughput virtual screening of phenylpyrimidine derivatives as selective JAK3 antagonists using computational methods",
    authors: "Abdelmoujoud Faris, Ibrahim M. Ibrahim, Hanine Hadni, Menana Elhallaoui",
    journal: "Journal of Biomolecular Structure and Dynamics",
    doi: "10.1080/07391102.2023.2240413",
  },
  {
    year: 2024,
    title: "Identification of potential inhibitors of cholinergic and β-secretase enzymes from phytochemicals derived from Gongronema latifolium Benth leaf: an integrated computational analysis",
    authors: "Gideon Ampoma Gyebi, Oludare M. Ogunyemi, Ibrahim M. Ibrahim, Olalekan B. Ogunro, Saheed O. Afolabi, Rotimi J. Ojo, Gabriel O. Anyanwu, Gaber El-Saber Batiha, Joseph O. Adebayo",
    journal: "Molecular Diversity",
    doi: "10.1007/s11030-023-10658-y",
  },
  {
    year: 2024,
    title: "Identification of Selective JAK3/STAT1 and CYP34A from Pyrazolopyrimidine Derivatives: A Search for Potential Drug Targets for Rheumatoid Arthritis using In-silico Drug Discovery Techniques",
    authors: "Abdelmoujoud Faris, Ibrahim M. Ibrahim, Souvik Chakraborty, Omkulthom Al Kamaly, Samar Zuhair Alshawwa, Menana Elhallaoui",
    journal: "Letters in Drug Design and Discovery",
    doi: "10.2174/1570180820666230821102836",
  },
  {
    year: 2024,
    title: "In silico and in vitro evaluation of the anti-virulence potential of patuletin, a natural methoxy flavone, against Pseudomonas aeruginosa",
    authors: "Ahmed Metwaly, Moustafa M. Saleh, Aisha Alsfouk, Ibrahim M. Ibrahim, Muhamad Abd-Elraouf, Eslam Elkaeed, Hazem Elkady, Ibrahim Eissa",
    journal: "PeerJ",
    doi: "10.7717/peerj.16826",
  },
  {
    year: 2024,
    title: "In silico computational drug discovery: a Monte Carlo approach for developing a novel JAK3 inhibitors",
    authors: "Abdelmoujoud Faris, Ivana Cacciatore, Ibrahim M. Ibrahim, Mohammed H. AL Mughram, Hanine Hadni, Kamal Tabti, Menana Elhallaoui",
    journal: "Journal of Biomolecular Structure and Dynamics",
    doi: "10.1080/07391102.2023.2270709",
  },
  {
    year: 2024,
    title: "In silico discovery of potent and selective Janus kinase 3 (JAK3) inhibitors through 3D-QSAR, covalent docking, ADMET analysis, molecular dynamics simulations, and binding free energy of pyrazolopyrimidine derivatives",
    authors: "Abdelmoujoud Faris, Hanine Hadni, Ibrahim M. Ibrahim, Menana Elhallaoui",
    journal: "Journal of Biomolecular Structure and Dynamics",
    doi: "10.1080/07391102.2023.2222839",
  },
  {
    year: 2024,
    title: "Integrated in silico and in vitro discovery of a new anticancer thiadiazole analog targeting VEGFR-2",
    authors: "Ibrahim H. Eissa, Hazem Elkady, Walid E. Elgammal, Hazem.A. Mahdy, Eslam B. Elkaeed, Aisha A. Alsfouk, Ibrahim M. Ibrahim, Dalal Z. Husein, Ahmed M. Metwaly",
    journal: "Journal of Molecular Structure",
    doi: "10.1016/j.molstruc.2024.138641",
  },
  {
    year: 2024,
    title: "Integrated study of Quercetin as a potent SARS-CoV-2 RdRp inhibitor: Binding interactions, MD simulations, and In vitro assays",
    authors: "Ahmed M. Metwaly, Esmail M. El-Fakharany, Aisha A. Alsfouk, Ibrahim M. Ibrahim, Eslam B. Elkaeed, Ibrahim H. Eissa",
    journal: "PLoS ONE",
    doi: "10.1371/journal.pone.0312866",
  },
  {
    year: 2024,
    title: "Investigating the effect of polymerase inhibitors on cellular proliferation: Computational studies, cytotoxicity, CDK1 inhibitory potential, and LC-MS/MS cancer cell entrapment assays",
    authors: "Faten Farouk, Ibrahim M. Ibrahim, Salma Sherif, Heba Gamal Abdelhamed, Marwa Sharaky, Ahmed A. Al-Karmalawy",
    journal: "Chemical Biology and Drug Design",
    doi: "10.1111/cbdd.14500",
  },
  {
    year: 2024,
    title: "New apoptotic anti-triple-negative breast cancer theobromine derivative inhibiting EGFRWT and EGFRT790M: in silico and in vitro evaluation",
    authors: "Ibrahim H. Eissa, Reda G.Yousef, Hazem Elkady, Aisha A. Alsfouk, Dalal Z. Husein, Ibrahim M. Ibrahim, Nehal El-Deeb, Ahmed M. Kenawy, Wagdy M. Eldehna, Eslam B. Elkaeed, Ahmed M. Metwaly",
    journal: "Molecular Diversity",
    doi: "10.1007/s11030-023-10644-4",
  },
  {
    year: 2024,
    title: "New modified thieno[2,3-d]pyrimidine derivatives as VEGFR-2 inhibitors: Design, synthesis, in vitro anti-cancer evaluation and divers in silico studies",
    authors: "Souad A. El-Metwally, Mariam Omara, Hazem Elkady, Eslam B. Elkaeed, Hanan A. Al-ghulikah, Mohammed S. Taghour, Hesham A. El-Mahdy, Ibrahim M. Ibrahim, Dalal Z. Husein, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "Journal of Molecular Structure",
    doi: "10.1016/j.molstruc.2023.137465",
  },
  {
    year: 2024,
    title: "New Theobromine Apoptotic Analogue with Anticancer Potential Targeting the EGFR Protein: Computational and In Vitro Studies",
    authors: "Ibrahim H. Eissa, Reda G. Yousef, Eslam B. Elkaeed, Aisha A. Alsfouk, Dalal Z. Husein, Ibrahim M. Ibrahim, Ahmed Ismail, Hazem Elkady, Ahmed M. Metwaly",
    journal: "ACS Omega",
    doi: "10.1021/acsomega.3c08148",
  },
  {
    year: 2024,
    title: "New thiazolidine-2,4-diones as potential anticancer agents and apoptotic inducers targeting VEGFR-2 kinase: Design, synthesis, in silico and in vitro studies",
    authors: "Hazem Elkady, Hazem A. Mahdy, Mohammed S. Taghour, Mohammed A. Dahab, Alaa Elwan, Mohamed Hagras, Mona H. Hussein, Ibrahim M. Ibrahim, Dalal Z. Husein, Eslam B. Elkaeed, Aisha A. Alsfouk, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "Biochimica et Biophysica Acta - General Subjects",
    doi: "10.1016/j.bbagen.2024.130599",
  },
  {
    year: 2024,
    title: "New thieno[2,3-d]pyrimidine derivatives as EGFRWT and EGFRT790M inhibitors: Design, synthesis, antiproliferative activities, docking studies, ADMET, toxicity, MD simulation studies",
    authors: "Eman A. Sobh, Mohammed A. Dahab, Eslam B. Elkaeed, Bshra A. Alsfouk, Ibrahim M. Ibrahim, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "Journal of Heterocyclic Chemistry",
    doi: "10.1002/jhet.4757",
  },
  {
    year: 2024,
    title: "New Thieno[2,3-d]pyrimidines as Anticancer VEGFR-2 Inhibitors with Apoptosis Induction: Design, Synthesis, and Biological and In Silico Studies",
    authors: "Eman A. Sobh, Mohammed A. Dahab, Eslam B. Elkaeed, Bshra A. Alsfouk, Ibrahim M. Ibrahim, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "Medicinal Chemistry",
    doi: "10.2174/0115734064285433240513092047",
  },
  {
    year: 2024,
    title: "Novel Thiazolidine-2,4-Dione Derivatives as Potential VEGFR-2 Inhibitors: Synthesis, Biological Testing, and in Silico Studies",
    authors: "Ibrahim Eissa, Hazem Elkady, Mohammed S. Taghour, Alaa Elwan, Mohammed A. Dahab, Mohamed Hagras, Eslam B. Elkaeed, Bshra A. Alsfouk, Ibrahim M. Ibrahim, Dalal Z. Husein, Elsayed E. Hafez, Hanem M. Mansour, Ahmed Metwaly, Hazem A. Mahdy",
    journal: "ChemistrySelect",
    doi: "10.1002/slct.202303095",
  },
  {
    year: 2024,
    title: "Pharmacophore-based virtual screening, molecular docking, and molecular dynamics investigation for the identification of novel, marine aromatase inhibitors",
    authors: "Mohamed A. Kotb, Islam Ahmed Abdelmawgood, Ibrahim M. Ibrahim",
    journal: "BMC Chemistry",
    doi: "10.1186/s13065-024-01350-9",
  },
  {
    year: 2024,
    title: "Repurposing FDA-Approved Drugs as Potential Inhibitors of SARS-CoV-2 PLpro: A Comprehensive Computational Study",
    authors: "Ahmed M. Metwaly, Eslam B. Elkaeed, Aisha A. Alsfouk, Ibrahim M. Ibrahim, Omar A. Soliman, Hazem Elkady, Ibrahim H. Eissa",
    journal: "Journal of Computational Biophysics and Chemistry",
    doi: "10.1142/S273741652450039X",
  },
  {
    year: 2024,
    title: "Repurposing FDA-approved drugs for COVID-19: targeting the main protease through multi-phase in silico approach",
    authors: "Ahmed M Metwaly, Eslam B Elkaeed, Aisha A Alsfouk, Ibrahim M Ibrahim, Hazem Elkady, Ibrahim H Eissa",
    journal: "Antiviral Therapy",
    doi: "10.1177/13596535241305536",
  },
  {
    year: 2024,
    title: "Semi-synthesized anticancer theobromine derivatives targeting VEGFR-2: in silico and in vitro evaluations",
    authors: "Mohammed A. Dahab, Hazem A. Mahdy, Hazem Elkady, Mohammed S. Taghour, Alaa Elwan, Mohamed A. Elkady, Elsayed G. E. Elsakka, Eslam B. Elkaeed, Aisha A. Alsfouk, Ibrahim M. Ibrahim, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "Journal of Biomolecular Structure and Dynamics",
    doi: "10.1080/07391102.2023.2219333",
  },
  {
    year: 2024,
    title: "Tackling SARS-CoV-2: Deep Purpose Virtual Screening Identified Compounds to Target the Glycosylated Full-Length GRP78",
    authors: "Wael M. Elshemey, Ibrahim M. Ibrahim, Ahmed A. Ezat, Alaa M. Elgohary, Abdo A. Elfiky, Aaya M. Nassar",
    journal: "Advanced Theory and Simulations",
    doi: "10.1002/adts.202400378",
  },
  {
    year: 2023,
    title: "A New Anticancer Semisynthetic Theobromine Derivative Targeting EGFR Protein: CADDD Study",
    authors: "Ibrahim H. Eissa, Reda G. Yousef, Hazem Elkady, Aisha A. Alsfouk, Bshra A. Alsfouk, Dalal Z. Husein, Ibrahim M. Ibrahim, Eslam B. Elkaeed, Ahmed M. Metwaly",
    journal: "Life",
    doi: "10.3390/life13010191",
  },
  {
    year: 2023,
    title: "A novel thieno[2,3-d]pyrimidine derivative inhibiting vascular endothelial growth factor receptor-2: A story of computer-aided drug discovery",
    authors: "Eman A. Sobh, Mohammed A. Dahab, Eslam B. Elkaeed, Bshra A. Alsfouk, Ibrahim M. Ibrahim, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "Drug Development Research",
    doi: "10.1002/ddr.22083",
  },
  {
    year: 2023,
    title: "A Theobromine Derivative with Anticancer Properties Targeting VEGFR-2: Semisynthesis, in silico and in vitro Studies",
    authors: "Ibrahim H. Eissa, Reda G. Yousef, Hazem Elkady, Eslam B. Elkaeed, Aisha A. Alsfouk, Dalal Z. Husein, Ibrahim M. Ibrahim, Mohamed M. Radwan, Ahmed M. Metwaly",
    journal: "ChemistryOpen",
    doi: "10.1002/open.202300066",
  },
  {
    year: 2023,
    title: "An insight into synthesis and antitumor activity of citrate and gallate stabilizing gold nanospheres",
    authors: "Mohamed M. Fathy, Abdo A. Elfiky, Yousef S. Bashandy, Mayar M. Hamdy, Ahmed M. Elgharib, Ibrahim M. Ibrahim, Rana T. Kamal, Ahmed S. Mohamed, Anan M. Rashad, Ola S. Ahmed, Yomna Elkaramany, Youssef S. Abdelaziz, Fatma G. Amin, Jehane I. Eid",
    journal: "Scientific Reports",
    doi: "10.1038/s41598-023-29821-4",
  },
  {
    year: 2023,
    title: "Anti-breast cancer potential of a new xanthine derivative: In silico, antiproliferative, selectivity, VEGFR-2 inhibition, apoptosis induction and migration inhibition studies",
    authors: "Ibrahim H. Eissa, Reda G. Yousef, Hazem Elkady, Eslam B. Elkaeed, Bshra A. Alsfouk, Dalal Z. Husein, Mostafa A. Asmaey, Ibrahim M. Ibrahim, Ahmed M. Metwaly",
    journal: "Pathology Research and Practice",
    doi: "10.1016/j.prp.2023.154894",
  },
  {
    year: 2023,
    title: "Anticancer derivative of the natural alkaloid, theobromine, inhibiting EGFR protein: Computer-aided drug discovery approach",
    authors: "Ibrahim H. Eissa, Reda G. Yousef, Eslam B. Elkaeed, Aisha A. Alsfouk, Dalal Z. Husein, Ibrahim M. Ibrahim, Mohamed S. Alesawy, Hazem Elkady, Ahmed M. Metwaly",
    journal: "PLoS ONE",
    doi: "10.1371/journal.pone.0282586",
  },
  {
    year: 2023,
    title: "Computer-Aided Drug Design of Novel Derivatives of 2-Amino-7,9-dihydro-8H-purin-8-one as Potent Pan-Janus JAK3 Inhibitors",
    authors: "Abdelmoujoud Faris, Ibrahim M. Ibrahim, Omkulthom Al kamaly, Asmaa Saleh, Menana Elhallaoui",
    journal: "Molecules",
    doi: "10.3390/molecules28155914",
  },
  {
    year: 2023,
    title: "Computer-assisted drug discovery (CADD) of an anti-cancer derivative of the theobromine alkaloid inhibiting VEGFR-2",
    authors: "Ibrahim H. Eissa, Reda G. Yousef, Mostafa A. Asmaey, Hazem Elkady, Dalal Z. Husein, Aisha A. Alsfouk, Ibrahim M. Ibrahim, Mohamed A. Elkady, Eslam B. Elkaeed, Ahmed M. Metwaly",
    journal: "Saudi Pharmaceutical Journal",
    doi: "10.1016/j.jsps.2023.101852",
  },
  {
    year: 2023,
    title: "Computer-Assisted Drug Discovery of a Novel Theobromine Derivative as an EGFR Protein-Targeted Apoptosis Inducer",
    authors: "Ibrahim H Eissa, Reda G Yousef, Eslam B Elkaeed, Aisha A Alsfouk, Dalal Z Husein, Ibrahim M Ibrahim, Hesham A El-Mahdy, Hazem Elkady, Ahmed M Metwaly",
    journal: "Evolutionary Bioinformatics",
    doi: "10.1177/11769343231217916",
  },
  {
    year: 2023,
    title: "Computer-assisted drug discovery of potential natural inhibitors of the SARS-CoV-2 RNA-dependent RNA polymerase through a multi-phase in silico approach",
    authors: "Eslam B Elkaeed, Bshra A Alsfouk, Tuqa H Ibrahim, Reem K Arafa, Hazem Elkady, Ibrahim M Ibrahim, Ibrahim H Eissa, Ahmed M Metwaly",
    journal: "Antiviral Therapy",
    doi: "10.1177/13596535231199838",
  },
  {
    year: 2023,
    title: "Deciphering the therapeutic role of Kigelia africana fruit in erectile dysfunction through metabolite profiling and molecular modelling",
    authors: "Femi Olawale, Kolawole Olofinsan, Oludare M. Ogunyemi, Kayode O. Karigidi, Gideon A. Gyebi, Ibrahim M. Ibrahim, Opeyemi Iwaloye",
    journal: "Informatics in Medicine Unlocked",
    doi: "10.1016/j.imu.2023.101190",
  },
  {
    year: 2023,
    title: "Design, Molecular Modeling, MD Simulations, Essential Dynamics, ADMET, DFT, Synthesis, Anti-proliferative, and Apoptotic Evaluations of a New Anti-VEGFR-2 Nicotinamide Analogue",
    authors: "Ibrahim H. Eissa, Eslam B. Elkaeed, Hazem Elkady, Reda G. Yousef, Bshra A. Alsfouk, Heba S. A. Elzahabi, Ibrahim M. Ibrahim, Ahmed M. Metwaly, Dalal Z. Husein",
    journal: "Current Pharmaceutical Design",
    doi: "10.2174/0113816128274870231102114858",
  },
  {
    year: 2023,
    title: "Design, semi-synthesis, anti-cancer assessment, docking, MD simulation, and DFT studies of novel theobromine-based derivatives as VEGFR-2 inhibitors and apoptosis inducers",
    authors: "Ibrahim H. Eissa, Reda G. Yousef, Hazem Elkady, Eslam B. Elkaeed, Aisha A. Alsfouk, Dalal Z. Husein, Ibrahim M. Ibrahim, Mostafa.A. Elhendawy, Murrell Godfrey, Ahmed M. Metwaly",
    journal: "Computational Biology and Chemistry",
    doi: "10.1016/j.compbiolchem.2023.107953",
  },
  {
    year: 2023,
    title: "Design, synthesis, anti-proliferative evaluation, docking, and MD simulation studies of new thieno[2,3-d]pyrimidines targeting VEGFR-2",
    authors: "Souad A. El-Metwally, Hazem Elkady, Mohamed Hagras, Dalal Z. Husein, Ibrahim M. Ibrahim, Mohammed S. Taghour, Hesham A. El-Mahdy, Ahmed Ismail, Bshra A. Alsfouk, Eslam B. Elkaeed, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "RSC Advances",
    doi: "10.1039/d3ra03128d",
  },
  {
    year: 2023,
    title: "Design, synthesis, docking, MD simulations, and anti-proliferative evaluation of thieno[2,3-d]pyrimidine derivatives as new EGFR inhibitors",
    authors: "Eman A. Sobh, Mohammed A. Dahab, Eslam B. Elkaeed, Aisha A. Alsfouk, Ibrahim M. Ibrahim, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "Journal of Enzyme Inhibition and Medicinal Chemistry",
    doi: "10.1080/14756366.2023.2220579",
  },
  {
    year: 2023,
    title: "Discovery of new thieno[2,3-d]pyrimidines as EGFR tyrosine kinase inhibitors for cancer treatment",
    authors: "Eman A Sobh, Mohammed A Dahab, Eslam B Elkaeed, Aisha A Alsfouk, Ibrahim M Ibrahim, Ahmed M Metwaly, Ibrahim H Eissa",
    journal: "Future Medicinal Chemistry",
    doi: "10.4155/fmc-2023-0086",
  },
  {
    year: 2023,
    title: "Discovery of new VEGFR-2 inhibitors and apoptosis inducer-based thieno[2,3-d]pyrimidine",
    authors: "Souad A. El-Metwally, Hazem Elkady, Mohamed Hagras, Eslam B. Elkaeed, Bshra A. Alsfouk, Ahmed S. Doghish, Ibrahim M. Ibrahim, Mohammed S. Taghour, Dalal Z. Husein, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "Future Medicinal Chemistry",
    doi: "10.4155/fmc-2023-0130",
  },
  {
    year: 2023,
    title: "Exploring the anticancer properties of a new nicotinamide analogue: Investigations into in silico analysis, antiproliferative effects, selectivity, VEGFR-2 inhibition, apoptosis induction, and migration suppression",
    authors: "Ibrahim H. Eissa, Reda G. Yousef, Muhammad Sami, Eslam B. Elkaeed, Bshra A. Alsfouk, Ibrahim M. Ibrahim, Dalal Z. Husein, Hazem Elkady, Ahmed M. Metwaly",
    journal: "Pathology Research and Practice",
    doi: "10.1016/j.prp.2023.154924",
  },
  {
    year: 2023,
    title: "Identification of new theobromine-based derivatives as potent VEGFR-2 inhibitors: design, semi-synthesis, biological evaluation, and in silico studies",
    authors: "Ibrahim H. Eissa, Reda G. Yousef, Hazem Elkady, Eslam B. Elkaeed, Aisha A. Alsfouk, Dalal Z. Husein, Ibrahim M. Ibrahim, Mostafa A. Elhendawy, Murrell Godfrey, Ahmed M. Metwaly",
    journal: "RSC Advances",
    doi: "10.1039/d3ra04007k",
  },
  {
    year: 2023,
    title: "Identification of promising multi-targeting inhibitors of obesity from Vernonia amygdalina through computational analysis",
    authors: "Oludare M. Ogunyemi, Gideon A. Gyebi, Ibrahim M. Ibrahim, Adewale M. Esan, Charles O. Olaiya, Mohameed M. Soliman, Gaber El-Saber Batiha",
    journal: "Molecular Diversity",
    doi: "10.1007/s11030-022-10397-6",
  },
  {
    year: 2023,
    title: "In silico, in vitro VEGFR-2 inhibition, and anticancer activity of a 3-(hydrazonomethyl)naphthalene-2-ol derivative",
    authors: "Eslam B. Elkaeed, Reda G. Yousef, Hazem Elkady, Ahmed B. M. Mehany, Bshra A. Alsfouk, Dalal Z. Husein, Ibrahim M. Ibrahim, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "Journal of Biomolecular Structure and Dynamics",
    doi: "10.1080/07391102.2022.2127907",
  },
  {
    year: 2023,
    title: "In vitro and in silico evaluation of new thieno[2,3-d]pyrimidines as anti-cancer agents and apoptosis inducers targeting VEGFR-2",
    authors: "Souad A. El-Metwally, Abdelrahman A. Abuelkhir, Hazem Elkady, Mohammed S. Taghour, Ibrahim M. Ibrahim, Dalal Z. Husein, Aisha A. Alsfouk, Ahlam Sultan, Ahmed Ismail, Samy Y. Elkhawaga, Eslam B. Elkaeed, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "Computational Biology and Chemistry",
    doi: "10.1016/j.compbiolchem.2023.107928",
  },
  {
    year: 2023,
    title: "Isolation and characterization of novel hydroxyflavone from Kigelia africana (Lam.) Benth. fruit ethyl acetate fraction against CHO 1 and HeLa cancer cell lines: In vitro and in silico studies",
    authors: "Akingbolabo Daniel Ogunlakin, Mubo Adeola Sonibare, Oloruntoba Emmanuel Yeye, Gideon Ampoma Gyebi, Damilare IyinKristi Ayokunle, Olayemi Elizabeth Arigbede, Ibrahim M. Ibrahim, Adeshina Isaiah Odugbemi, Almas Jabeen, Syeda Farah Shah, Farzana Shaheen, Oluwafemi Adeleke Ojo",
    journal: "Journal of Molecular Structure",
    doi: "10.1016/j.molstruc.2023.135180",
  },
  {
    year: 2023,
    title: "New [1,2,4]triazolo[4,3-c]quinazolines as intercalative Topo II inhibitors: Design, synthesis, biological evaluation, and in silico studies",
    authors: "Ahmed A. Gaber, Mohamed Sobhy, Abdallah Turky, Wagdy M. Eldehna, Samiha A. El-Sebaey, Souad A. El-Metwally, Abeer M. El-Naggar, Ibrahim M. Ibrahim, Eslam B. Elkaeed, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "PLoS ONE",
    doi: "10.1371/journal.pone.0274081",
  },
  {
    year: 2023,
    title: "New theobromine derivative as apoptotic anti-triple-negative breast cancer targeting EGFR protein: CADD story",
    authors: "Ibrahim H. Eissa, Reda G. Yousef, Hazem Elkady, Eslam B. Elkaeed, Dalal Z. Husein, Ibrahim M. Ibrahim, Bshra A. Alsfouk, Ahmed S. Doghish, Hesham A. El-Mahdy, Ahmed M. Kenawy, Nehal El-Deeb, Ahmed M. Metwaly",
    journal: "Journal of Molecular Structure",
    doi: "10.1016/j.molstruc.2023.136336",
  },
  {
    year: 2023,
    title: "New theobromine derivatives inhibiting VEGFR-2: design, synthesis, antiproliferative, docking and molecular dynamics simulations",
    authors: "Hazem A. Mahdy, Hazem Elkady, Mohammed S. Taghour, Alaa Elwan, Mohammed A. Dahab, Mohamed A. Elkady, Elsayed G.E. Elsakka, Eslam B. Elkaeed, Bshra A. Alsfouk, Ibrahim M. Ibrahim, Ibrahim H. Eissa, Ahmed M. Metwaly",
    journal: "Future Medicinal Chemistry",
    doi: "10.4155/fmc-2023-0089",
  },
  {
    year: 2023,
    title: "New thiazolidine-2,4-diones as effective anti-proliferative and anti-VEGFR-2 agents: Design, synthesis, in vitro, docking, MD simulations, DFT, ADMET, and toxicity studies",
    authors: "Hazem Elkady, Abdelrahman A. Abuelkhir, Mahmoud Rashed, Mohammed S. Taghour, Mohammed A. Dahab, Hazem A. Mahdy, Alaa Elwan, Hanan A. Al-ghulikah, Eslam B. Elkaeed, Ibrahim M. Ibrahim, Dalal Z. Husein, Ahmed Metwaly, Ibrahim H. Eissa",
    journal: "Computational Biology and Chemistry",
    doi: "10.1016/j.compbiolchem.2023.107958",
  },
  {
    year: 2023,
    title: "Novel sofosbuvir derivatives against SARS-CoV-2 RNA-dependent RNA polymerase: an in silico perspective",
    authors: "Abdulwahed Alrehaily, Abdo A. Elfiky, Ibrahim M. Ibrahim, Mohamed N. Ibrahim, Amr Sonousi",
    journal: "Scientific Reports",
    doi: "10.1038/s41598-023-49712-y",
  },
  {
    year: 2023,
    title: "Prediction of HCV E2 association with the host-cell chaperone, GRP78",
    authors: "Wael Elshemey, Ibrahim M. Ibrahim, Abdo A. Elfiky, Alaa M. Elgohary",
    journal: "Informatics in Medicine Unlocked",
    doi: "10.1016/j.imu.2023.101257",
  },
  {
    year: 2023,
    title: "Rationale design and synthesis of new apoptotic thiadiazole derivatives targeting VEGFR-2: computational and in vitro studies",
    authors: "Walid E. Elgammal, Hazem Elkady, Hazem A. Mahdy, Dalal Z. Husein, Aisha A. Alsfouk, Bshra A. Alsfouk, Ibrahim M. Ibrahim, Eslam B. Elkaeed, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "RSC Advances",
    doi: "10.1039/d3ra07562a",
  },
  {
    year: 2023,
    title: "Rosmarinic acid inhibits Rift Valley fever virus: in vitro, computational and analytical studies",
    authors: "Faten Farouk, Mohamed A. Zarka, Majid Mohammed Al-Sawahli, Amr Hassan, Aly Fahmy Mohamed, Ibrahim M. Ibrahim, Fafy Abd El-Rahman Mohammed, Rania Ibrahim Shebl",
    journal: "Future Virology",
    doi: "10.2217/fvl-2023-0119",
  },
  {
    year: 2023,
    title: "Simulation of gold nanoparticle movement through normal and cancer cell membranes",
    authors: "Abdo A. Elfiky, Ibrahim M. Ibrahim, Ahmed M. Elghareib, Yousef S. Bashandy, Ahmed Samir, Mayar M. Hamdy, Rana T. Kamal, Fatma G. Amin, Yomna Elkaramany, Anan M. Rashad, Youssef S. Abdelaziz, Mohamed M. Fathey",
    journal: "Computers in Biology and Medicine",
    doi: "10.1016/j.compbiomed.2023.107363",
  },
  {
    year: 2023,
    title: "Synthesis, biological evaluation and computer-aided discovery of new thiazolidine-2,4-dione derivatives as potential antitumor VEGFR-2 inhibitors",
    authors: "Hazem Elkady, Osama A. El-Dardir, Alaa Elwan, Mohammed S. Taghour, Hazem A. Mahdy, Mohammed A. Dahab, Eslam B. Elkaeed, Bshra A. Alsfouk, Ibrahim M. Ibrahim, Dalal Z. Husein, Elsayed E. Hafez, Amira M. G. Darwish, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "RSC Advances",
    doi: "10.1039/d3ra05689a",
  },
  {
    year: 2022,
    title: "(E)-N-(3-(1-(2-(4-(2,2,2-Trifluoroacetamido)benzoyl)hydrazono)ethyl)phenyl)nicotinamide: A Novel Pyridine Derivative for Inhibiting Vascular Endothelial Growth Factor Receptor-2: Synthesis, Computational, and Anticancer Studies",
    authors: "Reda G. Yousef, Hazem Elkady, Eslam B. Elkaeed, Ibraheem M. M. Gobaara, Hanan A. Al-ghulikah, Dalal Z. Husein, Ibrahim M. Ibrahim, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "Molecules",
    doi: "10.3390/molecules27227719",
  },
  {
    year: 2022,
    title: "A New Theobromine-Based EGFRWT and EGFRT790M Inhibitor and Apoptosis Inducer: Design, Semi-Synthesis, Docking, DFT, MD Simulations, and In Vitro Studies",
    authors: "Eslam B. Elkaeed, Reda G. Yousef, Hazem Elkady, Aisha A. Alsfouk, Dalal Z. Husein, Ibrahim M. Ibrahim, Mohamed Alswah, Heba S. A. Elzahabi, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "Processes",
    doi: "10.3390/pr10112290",
  },
  {
    year: 2022,
    title: "Assessment of alteration in antiviral plasma concentration across dialysis days: computational and analytical study",
    authors: "Faten Farouk, Ibrahim M. Ibrahim, Ehab Elkady, Sherif Mogawer, Shaimaa Elkholy, Ahmed Elmeligui, Reham Abdelghani, Salwa Ibrahim, Dina Wahba",
    journal: "Bioanalysis",
    doi: "10.4155/bio-2022-0218",
  },
  {
    year: 2022,
    title: "Design, Synthesis, Docking, DFT, MD Simulation Studies of a New Nicotinamide-Based Derivative: In Vitro Anticancer and VEGFR-2 Inhibitory Effects",
    authors: "Eslam B. Elkaeed, Reda G. Yousef, Hazem Elkady, Ibraheem M. M. Gobaara, Bshra A. Alsfouk, Dalal Z. Husein, Ibrahim M. Ibrahim, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "Molecules",
    doi: "10.3390/molecules27144606",
  },
  {
    year: 2022,
    title: "Discovery of new 1H-pyrazolo[3,4-d]pyrimidine derivatives as anticancer agents targeting EGFRWT and EGFRT790M",
    authors: "Ahmed A. Gaber, Mohamed Sobhy, Abdallah Turky, Hanan Gaber Abdulwahab, Ahmed A. Al-Karmalawy, Mostafa. A. Elhendawy, Mohamed. M. Radwan, Eslam B. Elkaeed, Ibrahim M. Ibrahim, Heba S. A. Elzahabi, Ibrahim H. Eissa",
    journal: "Journal of Enzyme Inhibition and Medicinal Chemistry",
    doi: "10.1080/14756366.2022.2112575",
  },
  {
    year: 2022,
    title: "Homology modelling, vHTS, pharmacophore, molecular docking and molecular dynamics studies for the identification of natural compound-derived inhibitor of MRP3 in acute leukaemia treatment",
    authors: "Femi Olawale, Opeyemi Iwaloye, Kolawole Olofinsan, Oludare M. Ogunyemi, Gideon A. Gyebi, Ibrahim M. Ibrahim",
    journal: "Chemical Papers",
    doi: "10.1007/s11696-022-02128-w",
  },
  {
    year: 2022,
    title: "Host-cell recognition of SARS-CoV-2 spike receptor binding domain from different variants",
    authors: "Abdo A Elfiky, Ibrahim M Ibrahim, Mohamed N Ibrahim, Wael M Elshemey",
    journal: "Journal of Infection",
    doi: "10.1016/j.jinf.2022.10.009",
  },
  {
    year: 2022,
    title: "Host-cell recognition through Cs-GRP78 is enhanced in the new Omicron variant of SARS-CoV-2, in silico structural point of view",
    authors: "Abdo A Elfiky, Ibrahim M Ibrahim",
    journal: "Journal of Infection",
    doi: "10.1016/j.jinf.2022.01.019",
  },
  {
    year: 2022,
    title: "Inhibitory potentials of phytocompounds from Ocimum gratissimum against anti-apoptotic BCL-2 proteins associated with cancer: an integrated computational study",
    authors: "Gideon A. Gyebi, Oludare M. Ogunyemi, Ibrahim M. Ibrahim, Saheed O. Afolabi, Rotimi J. Ojo, Uju D.I. Ejike, Joseph O. Adebayo",
    journal: "Egyptian Journal of Basic and Applied Sciences",
    doi: "10.1080/2314808X.2022.2106095",
  },
  {
    year: 2022,
    title: "Interference of Chaga mushroom terpenoids with the attachment of SARS-CoV-2; in silico perspective",
    authors: "Wael M. Elshemey, Abdo A. Elfiky, Ibrahim M. Ibrahim, Alaa M. Elgohary",
    journal: "Computers in Biology and Medicine",
    doi: "10.1016/j.compbiomed.2022.105478",
  },
  {
    year: 2022,
    title: "Modified pyrido[2,3-d]pyrimidin-4(3H)-one derivatives as EGFRWT and EGFRT790M inhibitors: Design, synthesis, and anti-cancer evaluation",
    authors: "Eman S. Nossier, Rania A. Alasfoury, Mohamed Hagras, May El-Manawaty, Sara M. Sayed, Ibrahim M. Ibrahim, Hazem Elkady, Ibrahim H. Eissa, Heba S.A. Elzahabi",
    journal: "Journal of Molecular Structure",
    doi: "10.1016/j.molstruc.2022.133971",
  },
  {
    year: 2022,
    title: "Molecular dynamics simulations and MM-GBSA reveal novel guanosine derivatives against SARS-CoV-2 RNA dependent RNA polymerase",
    authors: "Abdo A. Elfiky, Hanan A. Mahran, Ibrahim M. Ibrahim, Mohamed N. Ibrahim, Wael M. Elshemey",
    journal: "RSC Advances",
    doi: "10.1039/d1ra07447d",
  },
  {
    year: 2022,
    title: "Multidimensional in silico strategy for identification of natural polyphenols-based SARS-CoV-2 main protease (Mpro) inhibitors to unveil a hope against COVID-19",
    authors: "Şevki Adem, Volkan Eyupoglu, Ibrahim M. Ibrahim, Iqra Sarfraz, Azhar Rasul, Muhammad Ali, Abdo A. Elfiky",
    journal: "Computers in Biology and Medicine",
    doi: "10.1016/j.compbiomed.2022.105452",
  },
  {
    year: 2022,
    title: "New Anticancer Theobromine Derivative Targeting EGFRWT and EGFRT790M: Design, Semi-Synthesis, In Silico, and In Vitro Anticancer Studies",
    authors: "Eslam B. Elkaeed, Reda G. Yousef, Hazem Elkady, Aisha A. Alsfouk, Dalal Z. Husein, Ibrahim M. Ibrahim, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "Molecules",
    doi: "10.3390/molecules27185859",
  },
  {
    year: 2022,
    title: "Prevention of SARS-CoV-2 cell entry: insight from in silico interaction of drug-like alkaloids with spike glycoprotein, human ACE2, and TMPRSS2",
    authors: "Gideon A. Gyebi, Adegbenro P. Adegunloye, Ibrahim M. Ibrahim, Oludare M. Ogunyemi, Saheed O. Afolabi, Olalekan B. Ogunro",
    journal: "Journal of Biomolecular Structure and Dynamics",
    doi: "10.1080/07391102.2020.1835726",
  },
  {
    year: 2022,
    title: "SARS-CoV-2 Delta Variant is Recognized Through GRP78 Host-Cell Surface Receptor, In Silico Perspective",
    authors: "Abdo A. Elfiky, Ibrahim M. Ibrahim, Alaa M. Elgohary",
    journal: "International Journal of Peptide Research and Therapeutics",
    doi: "10.1007/s10989-022-10450-w",
  },
  {
    year: 2022,
    title: "Targeting SARS-CoV-2 endoribonuclease: a structure-based virtual screening supported by in vitro analysis",
    authors: "Ibrahim M. Ibrahim, Abdo A. Elfiky, Mohamed M. Fathy, Sara H. Mahmoud, Mahmoud ElHefnawi",
    journal: "Scientific Reports",
    doi: "10.1038/s41598-022-17573-6",
  },
  {
    year: 2022,
    title: "The Assessment of Anticancer and VEGFR-2 Inhibitory Activities of a New 1H-Indole Derivative: In Silico and In Vitro Approaches",
    authors: "Eslam B. Elkaeed, Reda G. Yousef, Hazem Elkady, Ibraheem M. M. Gobaara, Aisha A. Alsfouk, Dalal Z. Husein, Ibrahim M. Ibrahim, Ahmed M. Metwaly, Ibrahim H. Eissa",
    journal: "Processes",
    doi: "10.3390/pr10071391",
  },
  {
    year: 2021,
    title: "A possible role for GRP78 in cross vaccination against COVID-19",
    authors: "Abdo A. Elfiky, Ibrahim M. Ibrahim, Alaa M. Ismail, Wael M. Elshemey",
    journal: "Journal of Infection",
    doi: "10.1016/j.jinf.2020.09.004",
  },
  {
    year: 2021,
    title: "A review of human coronaviruses’ receptors: The host-cell targets for the crown bearing viruses",
    authors: "Aaya Nassar, Ibrahim M. Ibrahim, Fatma G. Amin, Merna Magdy, Ahmed M. Elgharib, Eman B. Azzam, Filopateer Nasser, Kirllos Yousry, Israa M. Shamkh, Samah M. Mahdy, Abdo A. Elfiky",
    journal: "Molecules",
    doi: "10.3390/molecules26216455",
  },
  {
    year: 2021,
    title: "Amyloid β fibrils disruption by kolaviron: Molecular docking and extended molecular dynamics simulation studies",
    authors: "Kayode Ezekiel Adewole, Gideon A. Gyebi, Ibrahim M. Ibrahim",
    journal: "Computational Biology and Chemistry",
    doi: "10.1016/j.compbiolchem.2021.107557",
  },
  {
    year: 2021,
    title: "Caffeic acid derivatives (CAFDs) as inhibitors of SARS-CoV-2: CAFDs-based functional foods as a potential alternative approach to combat COVID-19",
    authors: "Şevki Adem, Volkan Eyupoglu, Iqra Sarfraz, Azhar Rasul, Ameer Fawad Zahoor, Muhammad Ali, Mohnad Abdalla, Ibrahim M Ibrahim, Abdo A Elfiky",
    journal: "Phytomedicine",
    doi: "10.1016/j.phymed.2020.153310",
  },
  {
    year: 2021,
    title: "COVID-19 and Cell Stress",
    authors: "Abdo A. Elfiky, Ibrahim M. Ibrahim, Fatma G. Amin, Alaa M. Ismail, Wael M. Elshemey",
    journal: "Advances in Experimental Medicine and Biology",
    doi: "10.1007/978-3-030-63761-3_10",
  },
  {
    year: 2021,
    title: "Dietary stigmastane-type saponins as promising dual-target directed inhibitors of SARS-CoV-2 proteases: A structure-based screening",
    authors: "Oludare M. Ogunyemi, Gideon A. Gyebi, Ibrahim M. Ibrahim, Charles O. Olaiya, Joshua O. Ocheje, Modupe M. Fabusiwa, Joseph O. Adebayo",
    journal: "RSC Advances",
    doi: "10.1039/d1ra05976a",
  },
  {
    year: 2021,
    title: "Dual targeting of cytokine storm and viral replication in COVID-19 by plant-derived steroidal pregnanes: An in silico perspective",
    authors: "Gideon A. Gyebi, Oludare M. Ogunyemi, Ibrahim M. Ibrahim, Saheed O. Afolabi, Joseph O. Adebayo",
    journal: "Computers in Biology and Medicine",
    doi: "10.1016/j.compbiomed.2021.104406",
  },
  {
    year: 2021,
    title: "Host-cell recognition through GRP78 is enhanced in the new UK variant of SARS-CoV-2, in silico",
    authors: "Abdo A Elfiky, Ibrahim M Ibrahim",
    journal: "Journal of Infection",
    doi: "10.1016/j.jinf.2021.01.015",
  },
  {
    year: 2021,
    title: "Novel adenosine derivatives against SARS-CoV-2 RNA-dependent RNA polymerase: an in silico perspective",
    authors: "Amr Sonousi, Hanan A. Mahran, Ibrahim M. Ibrahim, Mohamed N. Ibrahim, Abdo A. Elfiky, Wael M. Elshemey",
    journal: "Pharmacological Reports",
    doi: "10.1007/s43440-021-00300-9",
  },
  {
    year: 2021,
    title: "Recognition through GRP78 is enhanced in the UK, South African, and Brazilian variants of SARS-CoV-2; An in silico perspective",
    authors: "Ibrahim M. Ibrahim, Abdo A. Elfiky, Alaa M. Elgohary",
    journal: "Biochemical and Biophysical Research Communications",
    doi: "10.1016/j.bbrc.2021.05.058",
  },
  {
    year: 2021,
    title: "SARS-CoV-2 host cell entry: an in silico investigation of potential inhibitory roles of terpenoids",
    authors: "Gideon A. Gyebi, Oludare M. Ogunyemi, Ibrahim M. Ibrahim, Olalekan B. Ogunro, Adegbenro P. Adegunloye, Saheed O. Afolabi",
    journal: "Journal of Genetic Engineering and Biotechnology",
    doi: "10.1186/s43141-021-00209-z",
  },
  {
    year: 2021,
    title: "Structure-based virtual screening suggests inhibitors of 3-Chymotrypsin-Like Protease of SARS-CoV-2 from Vernonia amygdalina and Occinum gratissimum",
    authors: "Gideon A. Gyebi, Abdo A. Elfiky, Oludare M. Ogunyemi, Ibrahim M. Ibrahim, Adegbenro P. Adegunloye, Joseph O. Adebayo, Charles O. Olaiya, Joshua O. Ocheje, Modupe M. Fabusiwa",
    journal: "Computers in Biology and Medicine",
    doi: "10.1016/j.compbiomed.2021.104671",
  },
  {
    year: 2021,
    title: "Zika virus envelope–heat shock protein A5 (GRP78) binding site prediction",
    authors: "Abdo A. Elfiky, Ibrahim M. Ibrahim",
    journal: "Journal of Biomolecular Structure and Dynamics",
    doi: "10.1080/07391102.2020.1784794",
  },
  {
    year: 2020,
    title: "Alkaloids and flavonoids from African phytochemicals as potential inhibitors of SARS-Cov-2 RNA-dependent RNA polymerase: an in silico perspective",
    authors: "Oludare M Ogunyemi, Gideon A Gyebi, Abdo A Elfiky, Saheed O Afolabi, Olalekan B Ogunro, Adegbenro P Adegunloye, Ibrahim M Ibrahim",
    journal: "Antiviral Chemistry and Chemotherapy",
    doi: "10.1177/2040206620984076",
  },
  {
    year: 2020,
    title: "COVID-19 spike-host cell receptor GRP78 binding site prediction",
    authors: "Ibrahim M. Ibrahim, Doaa H. Abdelmalek, Mohammed E. Elshahat, Abdo A. Elfiky",
    journal: "Journal of Infection",
    doi: "10.1016/j.jinf.2020.02.026",
  },
  {
    year: 2019,
    title: "GRP78: A cell's response to stress",
    authors: "Ibrahim M. Ibrahim, Doaa H. Abdelmalek, Abdo A. Elfiky",
    journal: "Life Sciences",
    doi: "10.1016/j.lfs.2019.04.022",
  },
];

const YEARS = [2027, 2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019];

export function Publications() {
  const [activeYear, setActiveYear] = useState<number | "all">("all");

  const filtered = useMemo(() => {
    if (activeYear === "all") return PUBLICATIONS;
    return PUBLICATIONS.filter((p) => p.year === activeYear);
  }, [activeYear]);

  return (
    <section
      id="publications"
      className="relative py-20 md:py-28 scroll-mt-16 bg-slate-50/60 border-y border-slate-200/60"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Publications"
          title="Recent, peer-reviewed computational & experimental work."
          description="A selection of recent papers — most of them combining the computational pipeline (docking, MD, MM-PBSA, deep learning) with experimental validation by my collaborators."
        />

        {/* Year filter */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          <FilterChip
            active={activeYear === "all"}
            onClick={() => setActiveYear("all")}
            label="All"
          />
          {YEARS.map((y) => (
            <FilterChip
              key={y}
              active={activeYear === y}
              onClick={() => setActiveYear(y)}
              label={String(y)}
            />
          ))}
          <span className="ml-auto text-xs text-slate-500">
            Showing {filtered.length} of {PUBLICATIONS.length} publications
          </span>
        </div>

        {/* List */}
        <ol className="mt-8 space-y-4">
          {filtered.map((pub, idx) => (
            <motion.li
              key={pub.doi}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="group relative p-5 sm:p-6 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-300 hover:shadow-md transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex items-center gap-3 shrink-0">
                  <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-emerald-50 border border-emerald-200/60 text-emerald-600">
                    <FileText className="w-5 h-5" />
                  </span>
                  <span className="text-2xl font-semibold text-slate-300 group-hover:text-emerald-500 transition-colors tabular-nums">
                    {pub.year}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] sm:text-base font-semibold text-slate-900 leading-snug">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-600 leading-relaxed">
                    {pub.authors}
                  </p>
                  <div className="mt-3 flex items-center flex-wrap gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
                      {pub.journal}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      doi: {pub.doi}
                    </span>
                  </div>
                </div>

                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                  aria-label={`Open DOI ${pub.doi}`}
                >
                  DOI
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.li>
          ))}
        </ol>

        {/* Profile links */}
        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          <a
            href="https://www.scopus.com/authid/detail.uri?authorId=57208274428"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-300 hover:shadow-md transition-all flex items-center gap-4"
          >
            <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-orange-50 border border-orange-200/60 text-orange-600">
              <FileText className="w-5 h-5" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">
                Scopus Author Profile
              </p>
              <p className="text-xs text-slate-500">
                Author ID: 57208274428
              </p>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
          </a>
          <a
            href="https://www.researchgate.net/profile/Ibrahim-Ibrahim-68"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-300 hover:shadow-md transition-all flex items-center gap-4"
          >
            <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-teal-50 border border-teal-200/60 text-teal-600">
              <FileText className="w-5 h-5" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">
                ResearchGate Profile
              </p>
              <p className="text-xs text-slate-500">
                Full publication list &amp; reads
              </p>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
}

function FilterChip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${
        active
          ? "bg-slate-900 text-white border-slate-900"
          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
      }`}
    >
      {label}
    </button>
  );
}
