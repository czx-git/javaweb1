package com.example.Dao;

import com.example.entity.News;
import com.example.entity.Params;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@Repository
public interface NewsDao extends Mapper<News> {

    List<News> findBySearch(@Param("params") Params params);

    @Select("select * from news where id = #{id} limit 1")
    News findById(@Param("id") Integer id);

}
