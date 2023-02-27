<template>
    <SideBar3 />
    <div class="sub2-container">
        <img class="sub2-section-icon" src="../../images/section-icon.png" alt="섹션아이콘" />
        <div class="sub2-T1">그룹 내 퇴사/직무변경자 현황</div>
    </div>
    <div class="sub2-container2">
        <div class="sub2-section-header">
            <img class="dot" src="../../images/dot.png" alt="" />
            <div class="sub2-T2">ATIVE그룹 퇴사자 현황</div>
        </div>
        <div class="sub2-sub-container">
            <div class="input-container">
                <label for="type" style="display:flex">기간</label>
                <v-date-picker v-model="startDate">
                    <template v-slot="{ inputValue, inputEvents }">
                        <div class="date-picker" v-on="inputEvents" >
                            {{inputValue}}
                            <img class="calendar-icon" src="../../images/calendar.png" alt="달력" />
                        </div>
                    </template>
                </v-date-picker>
                <div class="range">~</div>
                <v-date-picker v-model="endDate">
                    <template v-slot="{ inputValue, inputEvents }">
                        <div class="date-picker" v-on="inputEvents" >
                            {{inputValue}}
                            <img class="calendar-icon" src="../../images/calendar.png" alt="달력" />
                        </div>
                    </template>
                </v-date-picker>
                <input id="search" type="text" placeholder="이름"/>
                <button class="search-btn">검색</button>
            </div>
        </div>
    </div>
    <div class="sub2-container3">
        <div class="sub2-section-header">
            <img class="dot" src="../../images/dot.png" alt="" />
            <div class="sub2-T3">통계</div>
        </div>
        <table class="sub-table">
            <colgroup>
                <col width="13%">
                <col width="8%">
                <col width="8%">
                <col width="8%">
                <col width="8%">
                <col width="8%">
                <col width="8%">
                <col width="8%">
                <col width="8%">
                <col width="14%">
            </colgroup>
            <thead>
                <tr>
                    <th rowspan="2">회사명</th>
                    <th colspan="2">정규직</th>
                    <th colspan="6">비정규직</th>
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
                    <td>ATIVE 홀딩스</td>
                    <td>0</td>
                    <td>4</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>5</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="sub2-container4">
        <div class="list-num">[퇴사자 수:8]</div>
        <div class="sub2-section-header">
            <img class="dot" src="../../images/dot.png" alt="" />
            <div class="sub2-T3">ATIVE 홀딩스</div>
        </div>
        <table class="sub2-table">
            <colgroup>
                <col width="16%">
                <col width="12%">
                <col width="8%">
                <col width="8%">
                <col width="12%">
                <col width="29%">
                <col width="15%">
            </colgroup>
            <thead>
                <tr>
                    <th>회사명</th>
                    <th>부서명</th>
                    <th>이름</th>
                    <th>계약형태</th>
                    <th>퇴사/직무변경 날짜</th>
                    <th>퇴사/직무변경 이유</th>
                    <th>입력버튼</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in paginatedData" :key="list.group">
                    <td>{{list.compName}}</td>
                    <td>{{list.partName}}</td>
                    <td><router-link to="/man/sub5">{{list.name}}</router-link></td>
                    <td>{{list.type}}</td>
                    <td>
                        <v-date-picker v-model="list.date">
                            <template v-slot="{ inputValue, inputEvents }">
                                <div class="date-picker2" v-on="inputEvents" >
                                    {{inputValue}}
                                </div>
                            </template>
                        </v-date-picker>
                    </td>
                    <td><input class="reason" type="text" placeholder="퇴사 사유를 입력해주세요!" :value=list.reason /></td>
                    <td>
                        <button class="edit-btn">사유입력</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import HeaderNav from '../../components/HeaderNav.vue'
    import CustomSelect from '../../components/CustomSelect.vue'
    import SideBar3 from '../../components/SideBar3.vue'

    export default {
        components: {
            'HeaderNav' : HeaderNav,
            'CustomSelect' : CustomSelect,
            SideBar3
        },
        data () {
            return {
                pageNum: 0,
                pageSize: 10,
                pageList: [0,1,2],
                startDate:new Date(),
                endDate:new Date(),
                listArray: [
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    
                ],
            }
        },
        props: {
        },
        methods: {
            firstPage () {
                this.pageNum = 0;
            },
            nextPage () {
                this.pageNum += 1;
            },
            prevPage () {
                this.pageNum -= 1;
            },
            lastPage () {
                this.pageNum = this.pageCount -1;
            },
            toPage (page) {
                this.pageNum = page;
            },
        },
        computed: {
            pageCount () {
                let listLeng = this.listArray.length,
                listSize = this.pageSize,
                page = Math.floor(listLeng / listSize);
                if (listLeng % listSize > 0) page += 1;
                return page;
            },
            paginatedData () {
                const start = this.pageNum * this.pageSize,
                        end = start + this.pageSize;
                return this.listArray.slice(start, end);
            },
            pageList () {
                let pageList = [0,1,2]
                if (this.pageNum === 0) {
                    pageList = pageList;
                }
                else if (this.pageNum === this.pageCount -1){
                    pageList = [this.pageNum-2,this.pageNum-1,this.pageNum]
                }
                else {
                    pageList = [this.pageNum-1,this.pageNum,this.pageNum+1]
                }
                return pageList
            }
        }
    }
</script>

<style src="../../css/ManPower/sub_9.css" scoped />