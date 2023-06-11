# Mo-Vieva Magenta

## Back-end 서버 사용 전 초기 설정

<hr>

```markdown
1. git clone {현재 레포지토리}
2. cd final-pjt-back
3. python -m venv venv
4. source venv/Scripts/activate
5. pip install -r requirements.txt
6. python manage.py migrate
7. python manage.py loaddata accounts/grades.json accounts/users.json communities/articletags.json movies/genres.json movies/movies.json movies/videos.json movies/keywords.json
8. python manage.py runserver
```

## 업무 내역

<hr>

### 홍정현 (Front-end)

- 서비스 기획 구상
- DB 설계 및 초기 ERD 작성
- api 설계 및 요청 / 응답처리
- 사용자 인터페이스 구상 구현
- github pages를 사용한 front-end 서버 배포

### 최동우 (Back-end)

- 서비스 기획 구상
- DB 구현 및 최종 ERD 작성
- Django REST API 설계 및 구현
- 영화 추천 알고리즘 구상 구현
- heroku를 사용한 back-end 서버 배포

## 영화 추천 알고리즘 기반 커뮤니티 서비스 - 무 비바 마젠타

<hr>

### 서비스 목표<br>

- 사용자 참여 중심의 영화 커뮤니티
  - 커뮤니티 기능(게시글, 댓글, 좋아요/싫어요, 팔로우, 메세지, 관리자 설정 등)
  - 영화 관련 추가 기능(영화 모임 모집 기능, 영화 별, 장르 별 게시글 모아보기)
  - 현재 상영작이나 영화 상세정보 등, 편의성 정보 제공
  - 사용자의 사용성 및 참여(활성 유저)를 높이기 위한 모바일 친화적 디자인
    <br>
    <br>
- TMDB에서 수집한 영화 데이터와 사용자 데이터 기반으로 적절한 영화 추천
  - 모든 사용자에게 동일한 추천을 하는 것이 아닌 개인별 맞춤 추천 영화
  - 추천 영화를 통해 사용자의 흥미 유발 및 커뮤니티 참여 유도

### 개발 환경(Back-end)

- Python<br>
- Django 3.2.18<br>
- Django REST Framework

### 개발 환경(Front-end)

- Node.js v18.13.0.<br>
- Vue 2<br>
- Bootstrap

<hr>

## ERD

<hr>

![final-pjt-erd](https://github.com/woodong27/SSAFY_Final/assets/122415763/b24c2b42-2aa1-45d5-92f4-ddd90e97c20b)

## 서버 배포 링크

<hr>

- 프론트엔드 서비스 url
  - <https://oror-sine.github.io/mo_vieva_magenta/>
- 백엔드 api url
  - <https://ssafy-final.herokuapp.com>
  - url 목록 : <https://github.com/woodong27/SSAFY_Final_Backend> - README 참고


## 사용자 인터페이스(UI) 예시

<hr>

![Image Pasted at 2023-5-25 12-15](https://github.com/woodong27/SSAFY_Final/assets/122415763/6b6bc671-f7b4-4692-b000-54641a7c4c32)
![UI_Example](https://github.com/woodong27/SSAFY_Final/assets/122415763/be26ccfd-dfff-479f-b381-a8d6d3126b6e)

## 추천 알고리즘

<hr>

유저마다 선택한 선호 장르와 좋아요/싫어요 표시한 영화를 바탕으로 컨텐츠 기반 필터링을 사용하여 추천 영화 목록을 구성하는 알고리즘<br>
<br>
좋아요/싫어요 표시한 영화가 존재하면 자카드 유사도를 계산해서 해당 영화들과 비슷한 영화들의 목록을 만들어서 사용하였음<br>
<br>
선택한 선호 장르와 중복되는 것이 많은 영화일수록 더 높은 가중치를 가지게 됨<br>
해당 영화가 좋아요 표시한 영화와 유사한 영화 목록에 있다면 가중치를 더해주고, 싫어요 표시한 영화와 유사한 영화 목록에 있다면 가중치를 감소시켜 줌<br>
모든 영화에 대해서 가중치가 계산되고 나면, 가중치를 바탕으로 영화를 내림차순 정렬하여 추천 영화 목록을 구성

## 시행착오와 해결 과정

<hr>

### 1. 업무 분담

- 개발 초기 단계에는 각자가 백엔드와 프론트엔드를 둘 다 만든 다음, 서로의 백엔드와 프론트엔드를 교차해도 작동을 하는지 확인하고 싶었음.
  - 각자 백엔드, 프론트엔드 둘 다 만들어야 돼서 개발부담이 늘어남
  - 백엔드 api의 요청 방법 및 응답 결과를 통일 시켜줘야해서 계획 단계에서 시간 소요가 커짐
  - 예상했던 바였지만, 예상보다 더 한게 문제였음.
- 호스팅을 계획 중이었기 떄문에 프론트엔드 2개, 백엔드2개의 총 4개의 서버를 배포하는 대신 프론트엔드, 백엔드 내에서 directroy를 분리하여 프론트엔드, 백엔드 각 1개 씩 총 2개의 서버로 개발하여, 서버 배포를 단순화하고 api 토글을 쉽게 하여 개발 중 교차검증의 편의성을 높여 개발효율을 높이고 싶었음.
  - 경로 설정 등의 문제로 백엔드, 프론트엔드 내의 directory 분리 자체가 까다로웠음
  - 사실상 같은 기능을 각 페어가 하나 씩 2개를 만들어야하는데 django의 model 이나 vuex의 mutations, actions 등 거의 모든 식별자가 겹쳐서 식별자에 접두사 접미사 등을 달아서 구분해줘야 했음.
  - 그와중에 django auth_user_model은 하나 밖에 설정 못하기 떄문에, 그건 또 공유해야하는 상태.
  - 단순화와 개발편의를 높혀 개발효율을 높이고 싶었는데, 단순화와 개발편의성을 높히는 과정이 복잡하고, 비효율적인면이 있었음.
- 이에 따라 결국 백엔드와 프론트엔드를 분리하기로 결정

### 2. 백엔드 api 구현

- 기존에 존재하는 api들의 경우, 이미 많은 기능들이 구현되어 있을 뿐만 아니라 문서가 잘 정립되어 있고 그 요청 방법과 응답 결과가 일관성을 지님
- 하지만 우리가 구현한 api의 경우, api 문서가 제대로 정립되어 있지 않고, api 요청방법 및 응답결과의 일관성이 떨어졌음
  - 초기 ERD 작성 이후, api 요청방법 및 응답결과까지 정해놓고 하려고 했으나 시간상의 이유로 일단 api 개발을 병행, 중간중간 기능이 추가, 변경됨에 따라 문제가 심화됨
  - 프론트엔드에서 api 요청 및 응답처리하는데 있어서 이슈 발생
- 대대적이고, 지속적인 백엔드 api 수정 및 api 문서상 용어 통일
  - 이에 따라 프론트엔드에서의 백엔드 api 요청 및 응답 처리도 새로 진행함
  - 요청방법 및 응답결과의 일관성이 향상됨

### 3. 프론트엔드 api 요청 및 응답처리

- 백엔드 api 수정 이전
  - api 문서가 제대로 정립되어 있지 않아, api 관련 질문으로 서로의 작업 흐름이 끊김
  - 비슷한 데이터를 요청해도 그 요청방법과 응답결과가 제각각이라 코드 재사용이 힘들고 개별적인 요청 및 응답처리를 해주어야 했음
  - api 동작을 예측하기 힘들어서, 새로운 기능을 추가할 떄마다 그 요청 방법이나 응답 결과를 새로 숙지해야했음
- 백엔드 api 수정 이후
  - api 문서가 어느정도 정립됨에 따라 대부분 문서만 읽고도 작업이 가능해져서 api 문서 관련 질문으로 서로의 작업 흐름을 끊는 경우가 적어짐
  - 보다 일관성 있는 요청 방법과 응답 결과로 코드 재사용성이 높아져 개발편의 및 효율이 좋아짐
  - api 동작을 예측하기 쉬워져, 새로운 기능을 추가해도 대부분의 경우는 손쉽게 처리 가능
  - 요청 방법과 응답 결과가 달라짐에 따라 프론트엔드 api 요청 및 응답처리 또한 처음부터 새로 구현함

### 4. 프론트엔드 UI

- 초기에는 bootstrap를 사용하려다가 커스터마이징이 많이 필요해서 순수 html, css, javascsript를 통한 개발 진행
- 추후 bootstrap을 도입하니 기존 커스텀의 클래스명과 bootstrap의 클래스명이 충돌해서 ui가 꺠지는 현상이 생김
- 시간 및 디자인 상의 이후로 bootstrap 도입이 필요하다고 판단, 앞선 api 요청 및 응답처리와 함꼐 ui도 bootstrap을 통해 새로 개발 시작

### 5. 추천 알고리즘 제작<br>

- TMDB에서 영화의 리뷰와 키워드를 가져와서 Word2Vec 라이브러리를 사용해 임베딩 벡터로 가공하여 유사한 영화를 찾는데 사용하려고 시도했었음.

  - 리뷰나 키워드가 없는 영화도 많고 데이터의 양이 충분하지 않아 계속 오류가 발생했음

- 임베딩 벡터를 사용하여 코사인 유사도를 측정하는 방법 대신 키워드 간의 자카드 유사도를 측정하여 유사한 영화를 찾아서 사용했음
  - 자카드 유사도 : 두 집합의 교집합 크기를 합집합 크기로 나눈 값으로 공통성을 측정하는 방법, 1에 가까울 수록 유사

### 6. 프론트엔트 서버 배포

- Github pages를 통해 배포를 진행했는데, build 된 파일들이 서브폴더 dist에 있어서 제대로 배포가 되지 않음
  - 검색을 통해 dist용 branch를 따로 만들어서 배포하는데 성공하였으나, 방식이 좀 번거로워서 배포용 repo를 새로 만들었음
- `github.io/repository이름/route` 이렇게 처리해야하는데, router 사용시 `github.io/route`로 이동되어서 제대로 작동하지 않는 문제가 발생함

  - `vue.confihg.js`에 `publicPath: /repository이름`을 추가하여 해결

- github pages는 https를 지원하는데 kofic에서 지원하는 api가 htttp라서 에러가 뜸

  ```
  Mixed Content: The page at ... was loaded over HTTPS, but requested an insecure script 'http://..'
  ```

  - index.html에 아래 코드를 추가하여 https에서 http API 요청처리를 해줌
    ```
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    ```

- `github.io/repository이름/route`에서 새로고침하면 404에러가 뜨는 문제 발생
  - 히스토리모드 사용으로 일반적인 url(여러 페이지, 파일)처럼 보이지만 사실상 SPA(하나의 페이지, 파일)이기 떄문에 해당 경로의 파일을 찾을 수 없어서 404에러가 뜸
    - 404에러가 뜰 때 보여줄 페이지를 설정하면 해결 할 수 있지만, 문제는 '/' 경로를 제외한 모든 경로에서 내부적으로 404에러가 뜨고 있는 상태임
    - 아니면 SEO 불이익을 감수하고 hash모드를 사용하면 해결가능

### 7. 백엔드 서버 배포

- SSAFY 공통 notion에 올라와 있는 aws를 사용한 서버 배포 방법을 사용했지만, 여러번 시도 했음에도 제대로 배포가 되지 않았음
  - 배포에 대해서 공부해본 적이 없기때문에 어떤 것이 문제인지도 파악이 되지 않아 aws를 사용한 배포를 포기함
- 대신 좀 더 간단하게 배포가 가능하다는 heroku를 사용하고, 많은 자료들을 검색하며 하나씩 오류를 해결한 결과 배포에 성공할 수 있었음<br>

## 후기

<hr>

### 홍정현

- 역할 분담과 협업 방식에 대해서 많은 고민을 하게 되었음.
- 어떤 부분에서는 섣부른 최적화가 만악의 근원이 되었고 어떤 부분에서는 적당한 타협이 필요했는데, 이런 부분에 대해서 좀 더 신중하게 생각해봐야겠다는 생각이 들었고 이번에 이런 경험을 한 게 도움이 될 것 같음.
- 디자인은 언제든지 바뀔 수 있는 만큼 전체적인 레이아웃부터 짜놓고 점진적으로 디테일에 들어갔어야 했는데 그러지 못한 점이 아쉬움
- 스와이프 동작 등 모바일 인터페이스 동작 구현 공부를 해보고 싶다는 생각이 들었음.

### 최동우

- 프로젝트를 진행하며 어떻게 해야 좀 더 효율적으로 협업할 수 있을지 많은 고민을 하게 되었음<br>
- 기획했던 것을 중간에 수정하는 것은 이미 진행한 내용들을 변경하는데 많은 시간을 할애하게 만들기 때문에 처음부터 충분한 논의를 거쳐서 계획을 세우는 것의 중요성을 다시 한 번 느끼게 되었음<br>
- 모르는 것이나 해결하지 못하는 문제가 발생했을 때, 나의 상황에 맞는 해결방법을 찾기 위해서 어떤식으로 검색하고 자료를 찾아야 하는지 알게 되었음
