<template>
    <SideBar />
    <div class="sub1-container">
        <img class="sub1-section-icon" src="../../images/section-icon.png" alt="섹션아이콘" />
        <div class="sub1-T1">개인정보 관리</div>
    </div>
    <div class="sub1-container2">
        <div class="sub1-section-header">
            <img class="dot" src="../../images/dot.png" alt="" />
            <div class="sub1-T2">인사기본정보</div>
        </div>
        <div class="sub1-sub-container">
            <div class="input-container">
                <input id="comp-name" type="text" />
                <label for="comp-name">회사명</label>
            </div>
            <div class="input-container">
                <input id="part-name" type="text" />
                <label for="part-name">부서명</label>
            </div>
            <div class="input-container">
                <input id="position" type="text" />
                <label for="position">직책</label>
            </div>
            <div class="input-container">
                <input id="name" type="text" />
                <label for="name">이름</label>
            </div>
            <div class="input-container">
                <input id="email" type="text" />
                <label for="email">이메일</label>
            </div>
            <div class="input-container">
                <input id="num" type="text" />
                <label for="num">내선번호</label>
            </div>
            <div class="input-container">
                <input id="phone" type="text" />
                <label for="phone">휴대폰</label>
            </div>
            <input id="summary" type="text" />
            <label for="summary">업무요약</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="addInfo"/>
            <label for="addInfo"><span>IT 교육 정보 추가하기</span></label>
        </div>
    </div>
    <div class="sub1-container3">
        <div class="sub1-section-header">
            <img class="dot" src="../../images/dot.png" alt="" />
            <div class="sub1-T2">IT상세정보</div>
        </div>
        <div class="sub1-sub-container2">
            <div class="input-container">
                <CustomSelect
                :options="['1', '2', '3', '4']"
                :default="'1'"
                class="select"
                />
                <label for="type" style="display:flex">근무형태<div style="color:#8C1F47">*</div></label>
            </div>
            <div class="input-container">
                <CustomSelect
                :options="['1', '2', '3', '4']"
                :default="'1'"
                class="select"
                />
                <label for="work" style="display:flex">주직무<div style="color:#8C1F47">*</div></label>
            </div>
            <div class="input-container">
                <CustomSelect
                :options="['1', '2', '3', '4']"
                :default="'1'"
                class="select"
                />
                <label for="sub-work">부직무</label>
            </div>
            <div class="input-container">
                <input id="start-date" type="text" placeholder="YYYY.MM.DD"/>
                <label for="start-date">IT경력시작일</label>
            </div>
            <div class="input-container">
                <input id="group-join-date" type="text" placeholder="YYYY.MM.DD" />
                <label for="group-join-date">그룹내입사일</label>
            </div>
            <div class="input-container">
                <input id="comp-join-date" type="text" placeholder="YYYY.MM.DD" />
                <label for="comp-join-date">현재회사입사일</label>
            </div>
            <input id="work-detail" type="text" />
            <label for="work-detail">업무상세</label>
            <input id="certificate" type="text" />
            <label for="certificate">자격증</label>
            <input id="note" type="text" />
            <label for="note">비고</label>
        </div>
        <div class="container2-btns">
            <button class="list-btn">목록</button>
            <button class="copy-btn">아이템 복사</button>
            <button class="save-btn">저장</button>
        </div>
    </div>
    <div class="sub1-container4">
        <div class="sub1-section-header">
            <img class="dot" src="../../images/dot.png" alt="" />
            <div class="sub1-T2">변경이력</div>
        </div>
        <table class="sub1-table">
                <colgroup>
                    <col width="12%">
                    <col width="12%">
                    <col width="12%">
                    <col width="52%">
                    <col width="12%">
                </colgroup>
                <thead>
                    <tr>
                        <th>회사명</th>
                        <th>이름</th>
                        <th>구분</th>
                        <th>내용</th>
                        <th>날짜</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>OKPOS</td>
                        <td>범블비</td>
                        <td>변경</td>
                        <td>부서명(FULL)오케이포스 경영관리본부, 경영기획실 -> 오케이포스. 임시</td>
                        <td>2019-11-14</td>
                    </tr>
                    <tr>
                        <td>ATIVE 홀딩스</td>
                        <td>범블비</td>
                        <td>신규</td>
                        <td>ATIVE홀딩스, 메일사용 RPABOT1</td>
                        <td>2019-10-22</td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>

<script>
import App from '../../App.vue'
import CustomSelect from '../../components/CustomSelect.vue'
import SideBar from '../../components/SideBar.vue'

export default {
    components: {
        CustomSelect,
        App,
        SideBar,
    },
}
</script>

<style src="../../css/ManPower/sub_1.css" scoped />
