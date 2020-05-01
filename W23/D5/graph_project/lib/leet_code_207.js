// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

// There are a total of numCourses courses you have to take, labeled from 0 to
// numCourses-1.

// Some courses may have prerequisites, for example to take course 0 you have
// to first take course 1, which is expressed as a pair: [0,1]

// Given the total number of courses and a list of prerequisite pairs, is it
// possible for you to finish all courses?

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation:
//  There are a total of 2 courses to take.
//  To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation:
//  There are a total of 2 courses to take.
//  To take course 1 you should have finished course 0, and to take course 0
// you should also have finished course 1. So it is impossible.

// Constraints:

// The input prerequisites is a graph represented by a list of edges, not
// adjacency matrices. Read more about how a graph is represented.

// You may assume that there are no duplicate edges in the input prerequisites.
// 1 <= numCourses <= 10^5

// HINT:
// This problem is equivalent to finding if a cycle exists in a directed graph.
// If a cycle exists, no topological ordering exists and therefore it will be
// impossible to take all courses.

// Build graph -> adjacency list directed graph
function buildGraph(list) {

  let graph = {}
  list.forEach((prereq) => {
    let [ course, pre ] = prereq.map(String);
    if (course in graph) {
      graph[course].push(pre);
    } else {
      graph[course] = [ pre ]
    }
    if(!(pre in graph)){
      graph[pre] = [];
    }
  })

  return graph;
}

function canFinish(numCourses, prerequisites) {

  let prereq = buildGraph(prerequisites);
  let totalCourses = Object.keys(prereq).length;
  let completedCourses = new Set();

  let canTakeCourse = true;

  while(canTakeCourse) {
    canTakeCourse = false;

    for(let course in prereq) {
      let everyPreTaken = prereq[course].every((pre) => completedCourses.has(pre));
      if(!completedCourses.has(course) && everyPreTaken) {
        canTakeCourse = true;
        completedCourses.add(course);
      }
    }
  }

  return completedCourses.size === totalCourses;
  
}

