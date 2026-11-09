const multiplyValue = (value: number, multiplier?: number): number => {
  return value * (multiplier !== undefined ? multiplier : 2);
};

const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
};

const formatCoordinate = (coordinate: readonly [number, number, string]): string => {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  let result: T[] = [];
  for (let i = 0; i < arrays.length; i++) {
    result = result.concat(arrays[i]);
  }
  return result;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
  const popularCourses: Course[] = [];
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].isPublished && courses[i].students >= minStudents) {
      popularCourses.push(courses[i]);
    }
  }
  return popularCourses;
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  const values: T[K][] = [];
  for (let i = 0; i < items.length; i++) {
    values.push(items[i][key]);
  }
  return values;
};

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  public getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  public getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};