import {Injectable} from '@angular/core';
import {ServerService} from './server.service';
import {Task} from './Task';
import {Project} from './Project';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {TimeService} from './time.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  currentProjectId: number;

  constructor(private serverService: ServerService, private router: Router) {
  }

  static getTasksByPriority(tasks: Task[], projects: Project[]) {
    let priority = [];
    for (const task of tasks) {
      priority.push({task: task, priority: ProjectsService.getProjectById(task.projectId, projects).priority + '.' + task.priority});
    }
    priority = priority.sort((a, b) => a.priority - b.priority);

    return priority.map(value => value.task);
  }

  static getTagsAsArray(tags: string) {
    const result = [];
    const arr = tags.split(', ');
    for (const t of arr) {
      result.push({tag: t});
    }
    return result;
  }

  static getTaskIndex(task, tasks: Task[]) {
    for (let i = 0; i < tasks.length; i++) {
      const t = tasks[i];
      if (t.id === task.id) {
        return i;
      }
    }
    return -1;
  }

  static getProjectByName(project: Project, projects: Project[]) {
    for (const p of projects) {
      if (p.name === project.name) {
        return p;
      }
    }
    return null;
  }

  static getProjectById(projectId: number, projects: Project[]): Project {
    for (const p of projects) {
      if (p.id === projectId) {
        return p;
      }
    }
    return null;
  }

  getProjects() {
    return this.serverService.getProjects();
  }

  getTasks() {
    return this.serverService.getTasks();
  }

  getTasksInProject(project: Project, tasks: Task[]): Task[] {
    return tasks.filter(task => task.projectId === project.id);
  }

  changeCurrentProjectId(id) {
    this.currentProjectId = id;
  }

  navigateTo(url: string) {
    const resultUrl = url.split(' ').join('_');
    this.router.navigateByUrl(resultUrl);
  }

  getCurrentProject() {
    return this.serverService.getProjectById(this.router.url.split('/')[2].split(':')[1]);
  }

  getTasksInCurrentProject() {
    return this.serverService.getTasksInCurrentProject(this.router.url.split('/')[2].split(':')[1]);
  }

  addNewProject(id) {
    return this.serverService.addNewProject(this.generateRandomProjectName(), id);
  }

  private getCurrentProjectName() {
    return this.router.url.split('/')[2].split('_').join(' ');
  }

  deleteProject(project: Project) {
    return this.serverService.deleteProject(project.id);
  }

  saveProjectInfo(name: string, description: string, priority: number, project: Project) {
    const updatedProject = project;
    updatedProject.descriptions = description;
    updatedProject.name = name;
    updatedProject.priority = priority;

    return this.serverService.updateProject(updatedProject);
  }

  saveTask(task) {
    return this.serverService.saveTask(task);
  }

  getRouteUrl() {
    return this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd)
      );
  }

  addNewTask(projectId, taskId) {
    return this.serverService.addNewTask({
      id: taskId,
      name: 'new task',
      projectId,
      priority: 1,
      duration: '1/h',
      startDate: TimeService.getCurrentDate(),
      tags: [{tag: 'everyDay'}]
    });
  }

  getNewTaskId() {
    return this.serverService.getNewTaskId();
  }

  deleteTask(task: Task) {
    return this.serverService.deleteTask(task);
  }

  private generateRandomProjectName() {
    const adjectives = ['adamant', 'adroit', 'amatory', 'animistic', 'antic', 'arcadian', 'baleful', 'bellicose', 'bilious', 'boorish',
      'calamitous', 'caustic', 'cerulean', 'comely', 'concomitant', 'contumacious', 'corpulent', 'crapulous', 'defamatory', 'didactic',
      'dilatory', 'dowdy', 'efficacious', 'effulgent', 'egregious', 'endemic', 'equanimous', 'execrable', 'fastidious', 'feckless',
      'fecund', 'friable', 'fulsome', 'garrulous', 'guileless', 'gustatory', 'heuristic', 'histrionic', 'hubristic', 'incendiary',
      'insidious', 'insolent', 'intransigent', 'inveterate', 'invidious', 'irksome', 'jejune', 'jocular', 'judicious', 'lachrymose',
      'limpid', 'loquacious', 'luminous', 'mannered', 'mendacious', 'meretricious', 'minatory', 'mordant', 'munificent', 'nefarious',
      'noxious', 'obtuse', 'parsimonious', 'pendulous', 'pernicious', 'pervasive', 'petulant', 'platitudinous', 'precipitate',
      'propitious', 'puckish', 'querulous', 'quiescent', 'rebarbative', 'recalcitant', 'redolent', 'rhadamanthine', 'risible',
      'ruminative', 'sagacious', 'salubrious', 'sartorial', 'sclerotic', 'serpentine', 'spasmodic', 'strident', 'taciturn',
      'tenacious', 'tremulous', 'trenchant', 'turbulent', 'turgid', 'ubiquitous', 'uxorious', 'verdant', 'voluble', 'voracious',
      'wheedling', 'withering', 'zealous'];
    const nouns = ['ninja', 'chair', 'pancake', 'statue', 'unicorn', 'rainbows', 'laser', 'senor', 'bunny', 'captain', 'nibblets',
      'cupcake', 'carrot', 'gnomes', 'glitter', 'potato', 'salad', 'toejam', 'curtains', 'beets', 'toilet', 'exorcism', 'stick figures',
      'mermaid eggs', 'sea barnacles', 'dragons', 'jellybeans', 'snakes', 'dolls', 'bushes', 'cookies', 'apples', 'ice cream', 'ukulele',
      'kazoo', 'banjo', 'opera singer', 'circus', 'trampoline', 'carousel', 'carnival', 'locomotive', 'hot air balloon', 'praying mantis',
      'animator', 'artisan', 'artist', 'colorist', 'inker', 'coppersmith', 'director', 'designer', 'flatter', 'stylist', 'leadman',
      'limner', 'make-up artist', 'model', 'musician', 'penciller', 'producer', 'scenographer', 'set decorator', 'silversmith', 'teacher',
      'auto mechanic', 'beader', 'bobbin boy', 'clerk of the chapel', 'filling station attendant', 'foreman', 'maintenance engineering',
      'mechanic', 'miller', 'moldmaker', 'panel beater', 'patternmaker', 'plant operator', 'plumber', 'sawfiler', 'shop foreman', 'soaper',
      'stationary engineer', 'wheelwright', 'woodworkers'];

    function randomEl(list) {
      const i = Math.floor(Math.random() * list.length);
      return list[i];
    }

    return randomEl(adjectives) + ' ' + randomEl(nouns);
  }
}
