import cms from '../../data/projects-data.json';
import { normalizeProjectsData } from './projectMedia';

export const projectsData = normalizeProjectsData(cms.projects);
export const projectsNav = cms.projectsNav;
