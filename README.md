# Doodlin Design System

## URL

- <https://design.doodlin.co.kr>

## 빌드 및 실행 방법

Node v16.6.1을 사용합니다. 프로젝트 디렉토리에서 다음 커맨드로 node 버전 설정이 가능합니다.
```bash
nvm use
```

```bash
yarn storybook # 작업 하면서 실시간으로 변경된 결과를 보고 싶을 때
```

```bash
yarn publish # npm에 배포할 때.
```

### npm 배포 방법

1. npm권한을 받는다.

1. yarn publish로 배포한다.

1. 버전 설정하는 부분이 있는데 무조건 올려야 한다. (내리거나 현상유지 불가능)

1. 배포 후 git에 커밋한다.

1. yarn deploy 로 <https://design.doodlin.co.kr> 의 내용물을 업데이트한다.

### 특이사항

- DropDown과 CustomSelect, SelectBox, Tooltip 컴포넌트는 usingPortalNode을 켤 수 있는데, 이것을 켜면 팝오버되는 컴포넌트가 부모 컴포넌트와 동떨어진 portal의 형태로 동작합니다. (가림 현상 해소 등으로 사용 가능)

- DropDown 컴포넌트의 usingPortalNode를 true로 설정하면 open={} 속성을 사용하면 정상적으로 동작하지 않을 수 있다. 당분간은 uncontrolled로 쓰시길...

- DropDown 컴포넌트가 controlled component가 아니더라도 강제로 끌 수 있습니다. `ref.forceClose();` 를 사용하십시오.
