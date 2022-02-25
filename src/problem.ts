/*
0번 문항:
    `let`과 `var`, `const`의 차이점에 대해서 말해주세요.

1번 문항:
    Array<number>타입인 [1, 2, 3] 배열을 생성하고 export 구문을 사용하여 내보낸 다음,
    ../index.ts 파일에서 데이터 내용을 제곱하고, 내림차순 정렬하여 출력하세요.

2번 문항:
    { title: string, menu: string[] } 타입을 생성하세요.

3번 문항:
    axios 모듈을 import하고, 웅도 Meal API를 사용하여 원하는 날짜의 중식 메뉴를 출력하는 함수를 생성하고 export 구문을 사용하여 내보낸 다음,
    ../index.ts 파일에서 fetchMeal('2021-03-02')를 비동기로 호출하세요.
    웅도 Meal API에 대한 자세한 내용은 아래 링크를 참고하셔도 좋습니다.
    https://github.com/DKSH-WoongDo/Woongdo-API/blob/master/docs/school-meal.md

4번 문항:
    수많은 마라톤 선수들이 마라톤에 참여하였습니다.
    단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
    마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
    완주하지 못한 선수의 이름을 return 하도록 함수를 작성해주세요.
    
    <제한사항>
    참가자 중에는 동명이인이 있을 수 있습니다.

    <Input #1>
    p= ["marina", "josipa", "nikola", "vinko", "filipa"]
    c= ["josipa", "filipa", "marina", "nikola"]
    <Output #1>
    vinko

    <Input #2>
    p= ["leo", "kiki", "eden"]
    c= ["eden", "kiki"]
    <Output #2>
    leo

    <Input #3>
    p= ["mislav", "stanko", "mislav", "ana"]
    c= ["stanko", "ana", "mislav"]
    <Output #3>
    mislav

5번 문항:
    ../index.ts 파일에서 funcPackage안에 있는 함수를 비동기로 호출하여
    reject 조건을 충족하게 useEgg함수를 호출하여 Promise 상태가 fulfilled인 value 값을 출력하세요.

6번 문항:
    피보나치 함수를 작성하여 export 구문을 사용하여 내보낸 다음,
    ../index.ts 파일에서 fibo(35) 값을 출력하세요.
    [조건: 코드 수행 시간이 10ms 안팎이어야함.]

7번 문항:
    최소공배수를 구하는 함수를 작성하여 export 구문을 사용하여 내보낸 다음,
    ../index.ts 파일에서 LCM(15, 21), LCM(33, 22), LCM(9, 10) 값을 출력하세요.
*/

// 1번 문항

// 2번 문항

// 3번 문항

// 4번 문항

// 5번 문항
const delay = (ms: number) => {
    return new Promise(resolve => { setTimeout(resolve, ms) });
}

export const funcPackage = {
    callHen: async () => {
        await delay(2000);
        return '🐓';
    },
    getEgg: async () => {
        await delay(2000);
        return '🥚'
    },
    uesEgg: async (decision: boolean) => {
        await delay(2000);
        return new Promise((res, rej) => {
            if (decision)
                return res('🍳')
            return rej('🐣')
        })
    }
}

// 6번 문항

// 7번 문항
