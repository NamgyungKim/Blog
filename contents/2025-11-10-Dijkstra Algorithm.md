---
date: '2025-11-10'
title: '다익스트라 알고리즘'
categories: ['ALGORITHM']
tags: ['프로그래머스', '다익스트라', '알고리즘']
summary: '다익스트라(Dijkstra)알고리즘은 플로이드 워셜(Floyd Warshall), 벨만 포드(Bellman Ford)과 함께 특정 선택한 노드로 부터 다른 모든 노드들간의 가장 짧은 경로를 알 수 있게 해주는 알고리즘이다.'
thumbnail: ''
---

[프로그래머스 - LV2. 배달](https://school.programmers.co.kr/learn/courses/30/lessons/12978) 문제를 풀었다.  
처음엔 BFS로 풀었다. 결과는 32개 중 25개 통과 7개는 시간초과로 실패 했다.  
<br>
찾아보니 최단 경로를 찾는 몇 가지 알고리즘들이 있었다.  
**다익스트라(Dijkstra), 플로이드 워셜(Floyd Warshall), 벨만 포드(Bellman Ford)**
모두 한 정점(노드)에서 다른 정점까지의 최단 경로를 구하는 알고리즘이다.  
<br>
플로이드 워셜과 벨만 포드는 음(-)의 가중치가 있는 경우를 위해 고안된 알고리즘이라고 한다.  
이 문제에서는 음의 가중치는 없으므로 다익스트라 알고리즘에 대해서 알아봤다.  

## 설명  
특정 선택한 노드로 부터 다른 모든 노드들간의 가장 짧은 경로를 알 수 있게 해준다.  
경로의 방향은 있어도 없어도 상관 없다.  
그러나 각 경로는 음(-)의 경로가 있어서는 안된다. (음의 경로로 인해서 순환할시 점점 경로가 짧아질 수 있는 상황에서는 사용할 수 없다.)
 
### 필요한 상태값
- start : 위에 설명한 특정 선택 노드 위치
- Graph : 그래프(양방향 또는 단방향)
- visited : 방문한 노드들과 아직 방문하지 않은 곳 저장한다. 
- distance(결과값) : 시작지점에서 X 까지 계산된 최단 거리를 넣어줄 것이다. 초기값은 Graph에서 가져온다. 초기값으로 start에서 바로 인접한 노드간의 거리를 표기 한다. 바로갈 수 없는 노드는 최대값 또는 Infinity 로 설정해준다. `ex: [0, 3, Infinity, Infinity, 1, ...]`


### 필요한 함수
- getSmallDistance: 방문하지 않은 노드들 중 가장 거리가 가까운 노드 가져와주는 함수.
  1. 여기서 방문여부는 s를 통해서 가져온다. `ex: s가 false인 노드`
  2. 거리는 distance에서 가져온다.
- dijkstra: 다익스트라 알고리즘
  1. `current = getSmallDistance()` 를 통해서 가장 가까운 노드를 가져온다.
  2. current 는 visited에 방문한 노드로 표기 
  3. 이제 current로 부터 인접한 노드들의 최단거리를 d에 갱신해준다.
  4. 1~3을 반복해준다. getSmallDistance 를 통해 더 방문할 노드가 없으면 멈춘다.

초기에 가장 확실히 가져갈 수 있는건 start에서 가장 짧은 노드의 거리이다.  
가장 짧은 경로임이 확실시 되면 s에 방문 표기를 해주고 방문되지 않은 경로 중 가장 짧은 노드를 방문해 인접한 경로(d)를 갱신해주는 알고리즘 이라고 할 수 있겠다.  

## 구현
문제 : [프로그래머스 - LV2. 배달](https://school.programmers.co.kr/learn/courses/30/lessons/12978)
 
```javascript 
const start = 1
 
const visited = Array(N).fill(false); 

const Graph = Array.from({length: N}, (_, i) => Array.from({length: N}, (_, j) => i === j ? 0 : max))

// 프로그래머스에서의 그래프는 A에서 B로 가는데 있어서 경로가 2개이상이 될 수 있다. 
// 따라서 2개 이상일 경우 경로들 중 가장 짧은 경로만 남겨두고 나머지는 버리는 정리 과정이 필요했다. 
road.forEach(([start, end, length]) => {
  start -= 1;
  end -= 1;
  Graph[start][end] = Math.min(Graph[start][end], length);
  Graph[end][start] = Math.min(Graph[end][start], length);
});

let distance = [...Graph[start - 1]];

function getSmallDistance() {
    let result = -1
    let min = Infinity
    for (let i = 0; i < N; i++) {
        if (!visited[i] && min > distance[i]) {
            result = i
            min = distance[i]
        }
    }
    return result
} 

function updateDistance() {
  for (let i = 0; i < N; i++) {
    let current = getSmallDistance()

    if (current === -1) break;
    visited[current] = true;

    // 현재 노드를 통해 인접 노드로 가는 최단 거리 갱신
    for (let j = 0; j < N; j++) {
      if (Graph[current][j] !== max && distance[current] + Graph[current][j] < distance[j]) {
        distance[j] = distance[current] + Graph[current][j];
      }
    }
  }
}

updateDistance()
// 1마을 에서 K 이하의 거리의 마을 갯수
return distance.filter((num) => num <= K).length
```
 
## 참고 자료
- [위키백과: 다익스트라](https://ko.wikipedia.org/wiki/%EB%8D%B0%EC%9D%B4%ED%81%AC%EC%8A%A4%ED%8A%B8%EB%9D%BC_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)  
- [나무위키: 다익스트라 알고리즘](https://namu.wiki/w/%EB%8B%A4%EC%9D%B5%EC%8A%A4%ED%8A%B8%EB%9D%BC%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)
