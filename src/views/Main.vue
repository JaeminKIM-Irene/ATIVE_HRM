<template>
    <div>
        <HeaderNav />
        <div class="main-container">
            <div class="main-sub-container1">
                <div class="main-T1">그룹 IT현황 다운로드</div>
                <div class="main-T2">NICE Group IT Management Portal</div>
                <div class="main-download-btns">
                    <button class="manp-download">인력 데이터 다운로드</button>
                    <button class="mail-download">RPA 메일 수신 그룹 다운로드</button>
                </div>
            </div>
            <div class="main-sub-container2">
                <div class="main-T3">NICE 홀딩스</div>
                <div class="main-T4">test 계정(일반)님</div>
                <div class="main-T4">메일 사용 mail</div>
                <div class="main-T4">rpabot1@nice.co.kr</div>
            </div>
        </div>
        <div class="main-container2">
            <div class="main-header">
                <img class="main-section-icon" src="../images/section-icon.png" alt="섹션아이콘" />
                <div class="main-T5">그룹 IT인력 현황</div>
            </div>
            <table class="main-table">
                <colgroup>
                    <col width="15%">
                    <col width="7%">
                    <col width="7%">
                    <col width="7%">
                    <col width="7%">
                    <col width="7%">
                    <col width="7%">
                    <col width="7%">
                    <col width="7%">
                    <col width="10%">
                    <col width="10%">
                </colgroup>
                <thead>
                    <tr>
                        <th rowspan="2">회사명</th>
                        <th colspan="2">정규직</th>
                        <th colspan="6">비정규직</th>
                        <th rowspan="2" class="main-pink">미분류</th>
                        <th rowspan="2">합계</th>
                    </tr>
                    <tr>
                        <th>임원</th>
                        <th>정규직</th>
                        <th>계약(일반)</th>
                        <th>계약(전문)</th>
                        <th>계약(무기)</th>
                        <th>파견</th>
                        <th>도급</th>
                        <th>소계</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>전체</td>
                        <td>13</td>
                        <td>434</td>
                        <td>32</td>
                        <td>39</td>
                        <td>11</td>
                        <td>31</td>
                        <td>47</td>
                        <td>160</td>
                        <td>0</td>
                        <td>607</td>
                    </tr>
                    <tr @click="$router.push('/man/sub7')">
                        <td>NICE 홀딩스</td>
                        <td>1</td>
                        <td>11</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td>31</td>
                    </tr>
                    <tr @click="$router.push('/man/sub7')">
                        <td>NICE 홀딩스</td>
                        <td>1</td>
                        <td>11</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td>31</td>
                    </tr>
                    <tr @click="$router.push('/man/sub7')">
                        <td>NICE 홀딩스</td>
                        <td>1</td>
                        <td>11</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td>31</td>
                    </tr>
                    <tr @click="$router.push('/man/sub7')">
                        <td>NICE 홀딩스</td>
                        <td>1</td>
                        <td>11</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td>31</td>
                    </tr>
                    <tr @click="$router.push('/man/sub7')">
                        <td>NICE 홀딩스</td>
                        <td>1</td>
                        <td>11</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td>31</td>
                    </tr>
                    <tr @click="$router.push('/man/sub7')">
                        <td>NICE 홀딩스</td>
                        <td>1</td>
                        <td>11</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td>31</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import HeaderNav from '../components/HeaderNav.vue'

    export default {
        components: {
            'HeaderNav' : HeaderNav,
        },
    }
</script>

<style src="../css/main.css" scoped />