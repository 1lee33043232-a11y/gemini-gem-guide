# 제작 유의사항 (NOTES)

## 1. 이미지 반영 현황

주신 카카오톡 인포그래픽 4장은 이미 리사이즈·압축하여 `assets/images/`에 반영했고, `index.html`에서 아래와 같이 사용 중입니다.

| 파일명 | 원본 파일 | 사용 위치 | 비고 |
|---|---|---|---|
| `notebooklm-guide-clay.jpg` | KakaoTalk_..._01.png | 1번 표지 히어로 이미지 | 파스텔톤 클레이 마스코트 — 디자인 톤과 잘 맞음 |
| `notebooklm-vs-chatgpt.jpg` | KakaoTalk_...480.png | 2번 "왜 이 도구인가" | 일반 AI vs NotebookLM 비교표 |
| `notebooklm-guide-dark.jpg` | KakaoTalk_..._02.png | 7번 "기능 한눈에 보기" | 기능 총정리 인포그래픽 |
| `notebooklm-summary-thumb.jpg` | KakaoTalk_..._03.png | 9번 "핵심 요약" | 압축 요약 카드 이미지 |

※ 이 4장은 강의 소개용 참고 인포그래픽이며, 실제 NotebookLM 화면 캡처가 아닙니다. 4·5·6번 슬라이드(시작하기, 실습①, 실습②)에는 실제 조작 화면 스크린샷이 필요해 아래처럼 자리표시자로 남겨두었습니다.

## 2. 남은 이미지 자리표시자 (실제 캡처본 필요)

| 슬라이드 | 자리표시자 위치 | 필요한 이미지 | 저장 파일명(권장) |
|---|---|---|---|
| 4번 시작하기 | `.img-placeholder` (우측) | NotebookLM 접속 화면 + 새 노트북 생성 화면 | `assets/images/step1-getting-started.jpg` |
| 5번 실습① | `.img-placeholder` (하단) | PDF/유튜브 소스를 등록하는 과정 화면 | `assets/images/step2-add-sources.jpg` |
| 6번 실습② | (선택) 카드 하단 추가 가능 | 원클릭 생성 결과물(슬라이드/마인드맵) 화면 | `assets/images/step3-generate-content.jpg` |

**교체 방법**: 위 파일을 `assets/images/`에 저장한 뒤, `index.html`에서 해당 `<div class="img-placeholder">...</div>` 블록을
```html
<img src="assets/images/step1-getting-started.jpg" alt="설명 텍스트">
```
로 바꾸면 됩니다. 끝까지 이미지가 준비되지 않으면 placeholder를 삭제하고 `.split` 레이아웃을 1단(텍스트만)으로 조정하세요.

## 3. CTA 링크 연결 필요 항목

현재 신청/문의 관련 실제 링크가 없어 아래 3곳을 `href="#"` placeholder로 두었습니다. 링크가 확정되면 `index.html`에서 검색해 바로 교체하세요.

| 위치 | 버튼 텍스트 | 교체할 코드 위치 |
|---|---|---|
| 1번 표지 | 지금 신청하기 → | `<a href="#slide-10" class="btn btn-primary">지금 신청하기 →</a>` |
| 8번 슬라이드 | 📎 신청 링크 (준비 중) | `<a href="#" class="btn btn-secondary">📎 신청 링크 (준비 중)</a>` |
| 8번 슬라이드 | 💬 카카오톡 채널 문의 (준비 중) | `<a href="#" class="btn btn-secondary">💬 카카오톡 채널 문의 (준비 중)</a>` |
| 8번 슬라이드 | ▶️ 강의 예고 영상 (준비 중) | `<a href="#" class="btn btn-secondary">▶️ 강의 예고 영상 (준비 중)</a>` |
| 10번 슬라이드 | 📎 지금 신청하기 (링크 준비 중) | `<a href="#" class="btn btn-primary">📎 지금 신청하기 (링크 준비 중)</a>` |

유튜브 영상 링크가 생기면, 템플릿 원 요청대로 `https://img.youtube.com/vi/영상ID/hqdefault.jpg` 썸네일과 우측 하단 빨간 "▶ YouTube" 배지(`style.css`의 `.video-thumb`, `.video-badge` 클래스 재사용)를 추가하면 됩니다.

## 4. 배포 방법 (GitHub → Vercel)

1. github.com에서 새 저장소 생성 (예: `notebooklm2-lecture-landing`)
2. 이 폴더의 파일 전체(`index.html`, `style.css`, `script.js`, `assets/` 등)를 업로드 후 Commit
3. vercel.com에서 GitHub 로그인 → Add New → Project → 방금 만든 저장소 Import
4. 별도 설정 없이 Deploy 클릭 (정적 HTML이라 빌드 설정 불필요)
5. 1분 내 `~.vercel.app` 주소 생성 — 이후 수정 시 같은 이름으로 GitHub에 재업로드하면 자동 재배포됩니다.
