# Doodlin Design System

## URL

- <https://design.doodlin.co.kr>

## 빌드 및 실행 방법

전제: Node v14 이하 버전에서만 작동합니다.
nvm 사용을 추천드리며, 해당 프로젝트에서 작업 시, nvm use --lts 로 node버전을 14로 전환 후 작업해주시면 됩니다.
추후 패키지 업그레이드 하기 전까진 14버전에서 작업해 주셔야 합니다.

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

- DropDown컴포넌트의 usingPortalNode를 true로 설정하면 open={} 속성을 사용하면 정상적으로 동작하지 않을 수 있다. 당분간은 uncontrolled로 쓰시길...
