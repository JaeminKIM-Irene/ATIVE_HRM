<template>
    <div class="sub2-container">
        <img class="sub2-section-icon" src="../../images/section-icon.png" alt="섹션아이콘" />
        <div class="sub2-T1">RPA 빌링</div>
    </div>
    <div class="sub2-container2">
        <div class="sub2-section-header">
            <img class="dot" src="../../images/dot.png" alt="" />
            <div class="sub2-T3">RPA 수행 결과</div>
        </div>
        <div class="sub2-sub-container">
            <div class="input-container">
                <label for="select" style="display:flex">회사명</label>
                <CustomSelect
                :options="['1', '2', '3', '4']"
                :default="'1'"
                class="select"
                />
                <label for="type" style="display:flex">검색기간</label>
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
                <input id="search" type="text" placeholder="업무명/코드명"/>
                <button class="search-btn">검색</button>
            </div>
        </div>
    </div>
    <div class="sub2-container4">
        <table class="sub2-table">
            <colgroup>
                <col width="13%">
                <col width="10%">
                <col width="27%">
                <col width="15%">
                <col width="15%">
                <col width="10%">
            </colgroup>
            <thead>
                <tr>
                    <th>회사명</th>
                    <th>업무코드</th>
                    <th>업무명</th>
                    <th>시작시간</th>
                    <th>종료시간</th>
                    <th>수행시간(분)</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in paginatedData" :key="list.group">
                    <td>{{list.compName}}</td>
                    <td>{{list.code}}</td>
                    <td>{{list.job}}</td>
                    <td>{{list.startT}}</td>
                    <td>{{list.endT}}</td>
                    <td>{{list.time}}</td>
                </tr>
            </tbody>
        </table>
        <div class="table-btn-container">
            <button class="table-page-btn" :disabled="pageNum === 0" @click="firstPage">
                <vue-feather type="chevrons-left"/>
            </button>
            <button class="table-page-btn" :disabled="pageNum === 0" @click="prevPage">
                <vue-feather type="chevron-left"/>
            </button>
            <div class="page-numbers">
                <button class="page-number" :class="{ active: paging-1 === pageNum}" v-for="(paging, index) in pages" :key="index" @click="toPage(paging-1)">
                    {{paging}}
                </button>
            </div>
            <button class="table-page-btn" :disabled="pageNum >= pageCount - 1" @click="nextPage">
                <vue-feather type="chevron-right"/>
            </button>
            <button class="table-page-btn" :disabled="pageNum >= pageCount - 1"  @click="lastPage">
                <vue-feather type="chevrons-right"/>
            </button>
        </div>
    </div>
</template>

<script>
    import HeaderNav from '../../components/HeaderNav.vue'
    import CustomSelect from '../../components/CustomSelect.vue'

    export default {
        components: {
            'HeaderNav' : HeaderNav,
            'CustomSelect' : CustomSelect
        },
        data () {
            return {
                pageNum: 0,
                pageSize: 10,
                startDate:new Date(),
                endDate:new Date(),
                listArray: [
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    {compName:"ATIVE 홀딩스", code:"IS혁신실", job:"정기전표 산술", startT:"2022-11-30 14:00:16", endT:"2022-11-30 14:00:39", time:0},
                    
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
            pages () {
                const list=[];
                let startpage = parseInt(this.pageNum/3)*3+1;
                let lastPage = parseInt(this.pageNum / 3) * 3 + 3;
                let endpage = lastPage <= this.pageCount ? lastPage : this.pageCount;

                for(let index = startpage; index <= endpage; index+=1) {
                    list.push(index);
                }

                return list
            }
        }
    }
</script>

<style src="../../css/RPA/sub_12.css" scoped />