package com.example.Dao;

import com.example.entity.Baike;
import com.example.entity.Params;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@Repository
public interface BaikeDao extends Mapper<Baike> {

    List<Baike> findBySearch1(@Param("params") Params params);

    @Select("select * from news where id = #{id} limit 1")
    Baike findById(@Param("id") Integer id);

}
