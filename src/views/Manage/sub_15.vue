<template>
    <div class="sub1-container">
        <img class="sub1-section-icon" src="../../images/section-icon.png" alt="섹션아이콘" />
        <div class="sub1-T1">관리자 계정 추가</div>
    </div>
    <div class="sub1-container2">
        <div class="sub1-T2">신규 계정 추가 시 계정 비밀번호는 admin00으로 설정 됩니다.</div>
        <div class="sub1-sub-container">
            <div class="input-container">
                <CustomSelect
                :options="['1', '2', '3', '4']"
                :default="'1'"
                class="select"
                />
                <label for="main">메인BU</label>
            </div>
            <div class="input-container">
                <input id="name" type="text" />
                <label for="name">사용자이름</label>
            </div>
            <div class="input-container">
                <input id="account" type="text" />
                <label for="account">사용자계정</label>
            </div>
            <div class="input-container">
                <CustomSelect
                :options="['1', '2', '3', '4']"
                :default="'1'"
                class="select"
                />
                <label for="option">권한(option)</label>
            </div>
            <div class="input-container">
                <CustomSelect
                :options="['1', '2', '3', '4']"
                :default="'1'"
                class="select"
                />
                <label for="menu">권한(menu)</label>
            </div>
            <div class="input-container">
                <CustomSelect
                :options="['1', '2', '3', '4']"
                :default="'1'"
                class="select"
                />
                <label for="duty">권한(duty)</label>
            </div>
            <div class="input-container">
                <input id="password" type="text" />
                <label for="password">패스워드</label>
            </div>
            <div class="input-container">
                <CustomSelect
                    :options="['1', '2', '3', '4']"
                    :default="'1'"
                    class="select"
                    />
                <label for="use">OTP 사용여부</label>
            </div>
        </div>
    </div>
    <div class="sub1-container3">
        <div class="sub1-sub-container2">
            <div class="sub1-T3">메모</div>
            <textarea/>
        </div>
        <div class="container2-btns">
            <button class="list-btn">목록</button>
            <button class="copy-btn" :disabled="false">아이템 제거</button>
            <button class="copy-btn" :disabled="true">아이템 복사</button>
            <button class="save-btn">DB업데이트</button>
        </div>
    </div>
</template>

<script>
    import CustomSelect from '../../components/CustomSelect.vue'

    export default {
        components: {
            CustomSelect,
        },
    }
</script>

<style src="../../css/Manage/sub_15.css" scoped />